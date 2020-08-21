import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { getHomeworldInfo, getSpeciesInfo } from '../lib/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const CharacterCard = ({character}) => {
  const [ species, setSpecies ] = useState();
  const [ homeworld, setHomeworld ] = useState({});

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/character/${id}`);
  }

  // NOTE: Here we separate species request and homeworld. In CharacterPage they're one request. Why?
  const handleSpeciesRequest = async () => {
    try {
      const { name } = await getSpeciesInfo(character.species_url);
      setSpecies(name);
    } catch (error) {
      console.error(error);
    }
  }

  const handleHomeworldRequest = async () => {
    try {
      const results = await getHomeworldInfo(character.homeworld_url);
      setHomeworld(results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleSpeciesRequest();
    handleHomeworldRequest();
  }, []);

  return (
    <>
      <Card onClick={() => handleClick(character.id)}>
        <Title>{character.name}
            { species && <SpeciesText>({species})</SpeciesText> }
        </Title>
        { homeworld.name ?
            <Description>From {homeworld.name} (population: {homeworld.population})</Description>
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
    border-radius: 4px;
    width: calc(50% - 10px);
    padding: 2em;
    margin-bottom: 2em;
    background: rgba(255,255,255,0.05);
    transform: scale(0.98);
    transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      border-radius: inherit;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: block;
      box-shadow: 0px 0px 0px 1px #ffe81f;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    &:hover {
        background: rgba(255,255,255,0.12);
        transform: scale(1);
        transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;

        &:before {
          opacity: 1;
          transition: opacity 0.2s ease-in-out;
        }
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