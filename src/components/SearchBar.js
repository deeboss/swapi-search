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
                const options = results.map((i) => {
                    const name = i.name;
                    const url = i.url;
                    let character = {
                        name: name,
                        url: url
                    }
                    
                    Promise.all([
                        axios.get(i.homeworld),
                        axios.get(i.species[0])
                    ]).then((responses) => {
                        // Get a JSON object from each of the response
                        return Promise.all(responses.map((response) => {
                            // return response;
                            console.log("inside the responses");
                            console.log(response);
                        }));
                    }).then((data) => {
                        const homeworld = data[0].data.name;
                        const homeworld_population = data[0].data.population;
                        const species = data[1].data.name;

                        character["homeworld"] = homeworld;
                        character["homeworld_population"] = homeworld_population;
                        character["species"] = species;

                        // const character = {
                        //     name: name,
                        //     url: url,
                        //     homeworld: homeworld,
                        //     species: species,
                        //     homeworld_population: homeworld_population
                        // }

                        console.log(character);
                        setOptions(options => [...options, character]);

                    }).catch((error) => {
                        console.log("inside the error")
                        // if there's an error, log it
                        console.log(error);
                        character["homeworld"] = "Unknown";
                        character["homeworld_population"] = "unknown";
                        character["species"] = "Human";
                        console.log(character);
                        setOptions(options => [...options, character]);
                    })
                });

                setIsLoading(false);

                // return Promise.all(promises);
            })
    };

    // useEffect(() => {
    //     console.log(options);
    // }, [options])
    
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
                        <p>{option.name} ({option.species})</p>
                        <p>From {option.homeworld} (Population: {option.homeworld_population})</p>
                        {/* <p>Link: {option.url}</p> */}
                    </Fragment>
                )}
                />
            
        </Fragment>
    )
}

export default SearchBar;