import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
    padding: 0;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Card = styled.li`
    cursor: pointer;
    list-style-type: none;
    width: calc(33.33% - 10px);
    padding: 15px;
    margin-bottom: 15px;
    background: rgba(255,255,255,0.05);
`

const CharacterList = ({options}) => {
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/character/${id}`);
    }
    
    return (
        <Fragment>
            <List>    
                {options.map(character => (
                    <Card key={character.id} onClick={() => handleClick(character.id)}>
                        <h3>{character.name} ({character.species})</h3>
                        <p><small>From {character.homeworld} (population: {character.homeworld_population})</small></p>
                    </Card>
                ))}
            </List>
        </Fragment>
    )
}

export default CharacterList;