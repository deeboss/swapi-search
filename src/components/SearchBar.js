import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import styled from "styled-components";

const SearchInput = styled(AsyncTypeahead)`
    input {
        padding: 5px;
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        border-radius: 3px;
        border: 1px solid #ccc;
        font-size: larger;
    }
`

const SearchBar = () => {  
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const handleSearch = (query) => {
        axios.get(`https://swapi.dev/api/people/?search=${query}`)
            .then((response) => response.data)
            .then(({ results }) => {
                const options = results.map((i) => ({
                        name: i.name,
                        url: i.url,
                        homeworld_url: i.homeworld,
                        species_url: i.species[0],
                    }));

                for (const i in options) {
                    const request_url = options[i]['homeworld_url'];

                    axios.get(request_url)
                        .then((response) => response.data)
                        .then((data) => {
                            options[i]["homeworld"] = data.name;
                            options[i]["homeworld_population"] = data.population;
                        });
                }

                setOptions(options);
                setIsLoading(false);
            })
    };

    useEffect(() => {
    }, [options])
    
    return (
        <Fragment>
            <SearchInput
                id="characterSearch"
                isLoading={isLoading}
                labelKey={(option) => `${option.name}`}
                minLength={2}
                onSearch={handleSearch}
                options={options}
                placeholder="Search for a character..."
                renderMenuItemChildren={(option) => (
                    <Fragment>
                        <p>{option.name} ({option.species_url})</p>
                        <p>From {option.homeworld} (population: {option.homeworld_population})</p>
                        {/* <p>Link: {option.url}</p> */}
                    </Fragment>
                )}
                />
            
        </Fragment>
    )
}

export default SearchBar;