import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h3`
    margin-top: 0;
`

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
    width: calc(50% - 10px);
    padding: 2em;
    margin-bottom: 2em;
    background: rgba(255,255,255,0.05);
`

const SpeciesText = styled.span`
    margin-left: 5px;
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
                        <Title>{character.name}
                            { character.species && <SpeciesText>({character.species})</SpeciesText> }
                        </Title>
                        { character.homeworld_name &&
                            <p><small>From {character.homeworld_name} (population: {character.homeworld_population})</small></p>
                        }
                    </Card>
                ))}
            </List>
        </Fragment>
    )
}

export default CharacterList;