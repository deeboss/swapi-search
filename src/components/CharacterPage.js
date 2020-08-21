import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { getCharacterInfo, getHomeworldInfo, getSpeciesInfo, getFilmInfo } from '../lib/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'


import FilmList from './FilmList';

const CharacterPage = ({match}) => {

    const [ isLoading, setIsLoading ] = useState();
    const [ character, setCharacter ] = useState();
    const [ homeworld, setHomeworld ] = useState({});
    const [ species, setSpecies ] = useState();
    const [ films, setFilms ] = useState({});

    const history = useHistory();

    const handleClose = () => {
        history.push(`/`);
    }

    const handleCharacterRequest = async (id) => {
        try {
            setIsLoading(true);
            const results = await getCharacterInfo(id);
            setCharacter(results);
            setIsLoading(false);
        } catch (error) {
            history.push(`/404`);
        }
    }

    const handleHomeworldRequest = async (data) => {
      try {
        const { homeworld_url } = data;
        const results = await getHomeworldInfo(homeworld_url);
        setHomeworld(results);
      } catch (error) {
        console.error(error);
      }
    }

    const handleSpeciesRequest = async (data) => {
        try {
          const { species_url } = data;
          const { name } = await getSpeciesInfo(species_url);
          setSpecies(name);
        } catch (error) {
          console.error(error);
        }
      }
    

    const handleMultipleFilmRequest = async (data) => {
        try {
            const { films_url } = data;
            const result = await Promise.all(films_url.map((url) => {
                return getFilmInfo(url);
            }));
            setFilms(result);
        } catch (error) {
            console.error(error);
            return
        }
    }
    
    useEffect(() => {
        handleCharacterRequest(match.params.id);
    }, [])

    useEffect(()=>{
        if (character) {
            handleHomeworldRequest(character);
            handleSpeciesRequest(character);
            handleMultipleFilmRequest(character);
        }
    }, [character]);

    return (
        <>
        { !isLoading ?
            <Wrapper>
                <Header>
                    <Container>
                        { character && 
                            <Title>
                                {character.name}
                                { species &&
                                    <SpeciesText>({species})</SpeciesText>
                                }
                            </Title>
                        }
                        { homeworld.name &&
                            <Subtitle>From {homeworld.name} (population: {homeworld.population})</Subtitle>
                        }
                    </Container>
                    <Container>
                        <CloseButton onClick={handleClose}>
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </CloseButton>
                    </Container>
                </Header>
                <Container>
                    { films[0] &&
                        <>
                            <h4>Films appeared in:</h4>
                            <div>
                                { films && <FilmList films={films}/> }
                            </div>
                        </>
                    }
                </Container>
            </Wrapper>
            : <Loader><FontAwesomeIcon icon={faCircleNotch} size='6x' spin/></Loader>
        }
        </>
    )
}

export default CharacterPage;


const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
    padding-bottom: 0.75em;
    margin-bottom: 2.5em;
`

const CloseButton = styled.span`
    cursor: pointer;
    background: rgba(255,255,255,0);
    padding: 15px;
    border-radius: 40px;

    svg {
        pointer-events: none;
    }

    &:hover {
        background: rgba(255,255,255,0.12);
    }
`
const Wrapper = styled.div``

const Container = styled.div`
`

const Loader = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Title = styled.h1`

`


const Subtitle = styled.p`

`

const SpeciesText = styled.span`
    margin-left: 8px;
`