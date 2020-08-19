import React, { Fragment, useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
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
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);
    // const [options, setOptions] = useState([]);

    // Focus on search bar onComponentMount for better UX
    useEffect(()=>{
        ref.current.focus();
    }, []);

    const handleSearch = async (query) => {
        setIsLoading(true);
        const options = await getCharacterSearchResults(query);
        setOptions(options);

        // const otherDetails = options.map(async (i) => {
        //     const homeworld_details = await getHomeworldInfo(i.homeworld_url);
        //     const species_details = await getSpeciesInfo(i.species_url); 
        // });
        setIsLoading(false);
    };

    const handleChange = (character) => {
        history.push(`/character/${character[0].id}`);
    }
    
    return (
        <Fragment>
            <SearchInput
                id="characterSearch"
                isLoading={isLoading}
                // labelKey={(option) => `${option.name}`}
                minLength={2}
                onSearch={handleSearch}
                // onChange={handleChange}
                // options={options}
                ref={ref}
                placeholder="Search for a Star Wars character..."
                // renderMenuItemChildren={(option) => (
                //     <Fragment>
                //         <div id={option.id}>
                //             <p>{option.name} ({option.species})</p>
                //             <p><small>From {option.homeworld} (population: {option.homeworld_population})</small></p>
                //         </div>
                //     </Fragment>
                // )}
                />
        </Fragment>
    )
}

export default SearchBar;