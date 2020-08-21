import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const CharacterCard = ({character}) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/character/${id}`);
  }

  useEffect(() => {
    console.log(character);
  }, [character]);

  return (
    <>
      <Card onClick={() => handleClick(character.id)}>
        <Title>{character.name}
            { character.species && <SpeciesText>({character.species})</SpeciesText> }
        </Title>
        { character.homeworld_name ?
            <Description>From {character.homeworld_name} (population: {character.homeworld_population})</Description>
            :
            <FontAwesomeIcon icon={faCircleNotch} spin/>
        }
      </Card>
    </>
  )
}

export default CharacterCard;

const Card = styled.div`
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

const Title = styled.h3`
    margin-top: 0;
`

const Description = styled.p`
    margin: 0;
`

const SpeciesText = styled.span`
    margin-left: 5px;
`