import React, { Fragment, useState } from "react";
import styled from "styled-components";

import SearchBar from './SearchBar';
import CharacterList from './CharacterList';

const Title = styled.h1`
    color: white;
    text-align: center;
`

const SearchPage = () => {
    const [ options, setOptions ] = useState([]);

    return (
        <Fragment>
            <Title>Swapi Search</Title>
            <SearchBar setOptions={setOptions} options={options}/>
            <br /><br /><br /><br /><br /><br />
            <CharacterList options={options}/>
        </Fragment>
    )
}

export default SearchPage;