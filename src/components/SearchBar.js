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

    const getSpeciesInfo = url => {
        return axios.get(`${url}`)
            .then((response) => response.data)
            .then((data) => {
                return {
                    species: data.name,
                }
            })
            .catch(error => { console.error(error); return Promise.reject(error); });
    }

    const getHomeworldInfo = url => {
        return axios.get(`${url}`)
            .then((response) => response.data)
            .then((data) => {
                // console.log("getHomeworld Data...")
                // console.log(data);
                return {
                    homeworld: data.name,
                    homeworld_population: data.population
                }
            })
            .catch(error => { console.errors(error); return Promise.reject(error); });
    }

    const handleSearch = query => {
        axios.get(`https://swapi.dev/api/people/?search=${query}`)
            .then((response) => response.data)
            .then(({results}) => {
                const character = results.map((i) => {

                    axios.all([
                        getHomeworldInfo(i.homeworld),
                        getSpeciesInfo(i.species)
                    ])
                    .then((data) => {
                        console.log(i.name);
                        console.log(i.url);
                        console.log(data[0].homeworld);
                        console.log(data[0].homeworld_population);
                        console.log(data[1].species);
                    });
                });
            })
    };

    useEffect(() => {
        console.log("useEffect");
        console.log(options);
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
                        {/* <p>{option.name} ({option.species})</p> */}
                        {/* <p>From {option.homeworld} (Population: {option.homeworld_population})</p> */}
                        {/* <p>Link: {option.url}</p> */}
                    </Fragment>
                )}
                />
            
        </Fragment>
    )
}

export default SearchBar;