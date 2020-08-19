import React, { Fragment, useState } from "react";
import styled from "styled-components";

import SearchBar from './SearchBar';

const Title = styled.h1`
    color: white;
    text-align: center;
`

const SearchPage = () => {

    return (
        <Fragment>
            <Title>Swapi Search</Title>
            <SearchBar/>
        </Fragment>
    )
}

export default SearchPage;