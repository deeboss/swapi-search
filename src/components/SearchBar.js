import React, { Fragment, useState, useEffect, useRef } from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import styled from "styled-components";

import { getCharacterSearchResults, getSpeciesInfo, getHomeworldInfo } from '../lib/api';

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
            color: #000000;
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

const SearchBar = ({options, setOptions, setPageOptions, query}) => {  
    const ref = useRef();
    const [ isLoading, setIsLoading ] = useState(false);

    // Focus on search bar on render for better UX
    useEffect(()=>{
        ref.current.focus();
    }, []);

    const handleSearch = async (query, page) => {
        setIsLoading(true); 
        let options = await getCharacterSearchResults(query, page);
        setOptions(options[0]);
        setPageOptions(options[1]);
        setIsLoading(false);

        const moreInfoRequests = options[0].map(async (i) => {
            try {
                const species = await getSpeciesInfo(i.species_url);
                const homeworld = await getHomeworldInfo(i.homeworld_url);
                return {
                    name: i.name,
                    id: i.id,
                    homeworld_name: homeworld.name,
                    homeworld_population: homeworld.population,
                    species: species.name
                }
            } catch (error) {
                console.log("there's an error with moreInfo");
                console.error(error);
                return Promise.reject(error);
            }
        })

        options[0] = await Promise.all(moreInfoRequests);
        setOptions(options[0]);
    };

    useEffect(() => {
        if (query) {
            handleSearch(query.term, query.page);
        }
    }, [query])
    
    return (
        <Fragment>
            <SearchInput
                id="characterSearch"
                isLoading={isLoading}
                labelKey={(option) => `${option.name}`}
                minLength={1}
                onSearch={handleSearch}
                options={options}
                ref={ref}
                placeholder="Type to search for a Star Wars character"
                />
        </Fragment>
    )
}

export default SearchBar;