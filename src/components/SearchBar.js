import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { fetchPeople, searchPerson } from "../actions/peopleList";

const Paragraph = styled.p`
    background: yellow;
    font-weight: bold;
`

const SearchInput = styled.input`
    padding: 5px;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 3px;
    border: 1px solid #ccc;
`

const SearchBar = () => {  

    const [ query, setQuery ] = useState("");

    const inputQuery = e => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        if (query) {
            console.log("Searching...");
            searchPerson(query);
        }
        
    }, [query]);
    
    return (
        <>
            <Paragraph>Hello world</Paragraph>
            <SearchInput
                onChange={inputQuery}
                type="text"
                placeholder="Search for a character"
            />
        </>
    )
}

export default SearchBar;