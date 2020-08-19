import React, { Fragment, useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { getSpeciesInfo, getHomeworldInfo } from '../lib/api';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import styled from "styled-components";

const SearchInput = styled(AsyncTypeahead)`
    input {
        padding: 8px 6px;
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        border-radius: 3px;
        border: 1px solid #ccc;
        font-size: larger;
    }

    .dropdown-menu {
        z-index: 5;
        box-shadow: 0px 4px 12px rgba(0,0,0,0.2);
        border-radius: 2px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        background: white;

        a {
            display: block;
            padding: 12px 6px;
            color: inherit;
            text-decoration: none;

            &:hover {
                background: rgba(0,0,0,0.08);
            }
        }

        p {
            margin: 0;
            color: #000000;
        }
    }
`

const SearchBar = () => {  
    const ref = useRef();
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    // Focus on search bar onComponentMount for better UX
    useEffect(()=>{
        ref.current.focus();
    }, [])

    const handleSearch = query => {
        setIsLoading(true);

        axios.get(`https://swapi.dev/api/people/?search=${query}`)
            .then((response) => response.data)
            .then(async ({results}) => {
                const promises = results.map((i) => {

                    // Get ID of character for dynamic character page rendering
                    const id = i.url.split('/')[5];

                    return Promise.all([
                        getHomeworldInfo(i.homeworld),
                        getSpeciesInfo(i.species)
                    ])
                    .then(data => {
                        return {
                            name: i.name,
                            id: id,
                            homeworld: data[0].homeworld,
                            homeworld_population: data[0].homeworld_population,
                            species: data[1].species
                        }
                    });
                });

                const options = await Promise.all(promises);
                setOptions(options);
                setIsLoading(false);
            })
    };

    // Note to self: destructure for simplicity
    const handleChange = (character) => {
        history.push(`/character/${character[0].id}`);
    }
    
    return (
        <Fragment>
            <SearchInput
                id="characterSearch"
                isLoading={isLoading}
                labelKey={(option) => `${option.name}`}
                minLength={2}
                onSearch={handleSearch}
                onChange={handleChange}
                options={options}
                ref={ref}
                placeholder="Search for a Star Wars character..."
                renderMenuItemChildren={(option) => (
                    <Fragment>
                        <div id={option.id}>
                            <p>{option.name} ({option.species})</p>
                            <p><small>From {option.homeworld} (population: {option.homeworld_population})</small></p>
                        </div>
                    </Fragment>
                )}
                />
        </Fragment>
    )
}

export default SearchBar;