import React, { useEffect } from "react";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

const CharacterList = ({options}) => {    
    return (
        <>
            <List>    
                {options.map(character => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                    />
                ))}
            </List>
        </>
    )
}

export default CharacterList;

const List = styled.ul`
    padding: 0;
    list-style-type: none;
    text-align: center;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`