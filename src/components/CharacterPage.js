import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";

const Title = styled.h1`
    color: white;
`

const CharacterPage = ({match}) => {
    const [ characterList, setCharacterList ] = useState([]);
    
    return (
        <Fragment>
            <Title>Hello this is the character page of id number: {match.params.id}</Title>
        </Fragment>
    )
}

export default CharacterPage;