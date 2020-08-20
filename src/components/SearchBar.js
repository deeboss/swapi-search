import React, { Fragment, useState, useEffect, useRef } from "react";
import { getCharacterSearchResults, getSpeciesInfo, getHomeworldInfo } from '../lib/api';
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

const SearchBar = ({options, setOptions}) => {  
    const ref = useRef();
    const [isLoading, setIsLoading] = useState(false);

    // Focus on search bar on render for better UX
    useEffect(()=>{
        ref.current.focus();
    }, []);

    const handleSearch = async (query) => {
        setIsLoading(true); 
        let options = await getCharacterSearchResults(query);
        setOptions(options);
        setIsLoading(false);

        const moreInfoRequests = options.map(async (i) => {
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

        options = await Promise.all(moreInfoRequests);
        setOptions(options);
    };
    
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
                placeholder="Search for a Star Wars character..."
                />
        </Fragment>
    )
}

export default SearchBar;