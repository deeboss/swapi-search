import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Title = styled.h3`
    margin-top: 0;
`

const List = styled.ul`
    padding: 0;
    list-style-type: none;
    text-align: center;
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
    transform: scale(0.98);
    transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
        background: rgba(255,255,255,0.12);
        transform: scale(1);
        transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;
    }
`

const Description = styled.p`
    margin: 0;
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
                        { character.homeworld_name ?
                            <Description>From {character.homeworld_name} (population: {character.homeworld_population})</Description>
                            :
                            <FontAwesomeIcon icon={faCircleNotch} spin/>
                        }
                    </Card>
                ))}
            </List>
        </Fragment>
    )
}

export default CharacterList;