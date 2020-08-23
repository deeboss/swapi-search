import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { getCharacterInfo, getHomeworldInfo, getSpeciesInfo, getFilmInfo } from '../lib/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'


import FilmList from './FilmList';

const CharacterPage = ({match}) => {

    const signal = axios.CancelToken.source();

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
            const results = await getCharacterInfo(id, signal.token);
            setCharacter(results);
            setIsLoading(false);
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Error: ', error.message); // => prints: Api is being canceled
            } else {
                history.push(`/error`);
            }
        }
    }

    const handleHomeworldRequest = async (data) => {
      try {
        const { homeworld_url } = data;
        const results = await getHomeworldInfo(homeworld_url, signal.token);
        setHomeworld(results);
      } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Error: ', error.message); // => prints: Api is being canceled
            } else { console.error(error); }
      }
    }

    const handleSpeciesRequest = async (data) => {
        try {
          const { species_url } = data;
          const { name } = await getSpeciesInfo(species_url, signal.token);
          setSpecies(name);
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Error: ', error.message); // => prints: Api is being canceled
            } else { console.error(error); }
        }
      }
    

    const handleMultipleFilmRequest = async (data) => {
        try {
            const { films_url } = data;
            const result = await Promise.all(films_url.map((url) => {
                return getFilmInfo(url, signal.token);
            }));
            setFilms(result);
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Error: ', error.message); // => prints: Api is being canceled
            } else { console.error(error); }
        }
    }
    
    useEffect(() => {
        handleCharacterRequest(match.params.id);

        return () => {
            signal.cancel('Api is being canceled');
        }
    }, [])

    useEffect(()=>{
        if (character) {
            handleHomeworldRequest(character);
            handleSpeciesRequest(character);
            handleMultipleFilmRequest(character);
        }

        return () => {
            signal.cancel('Api is being canceled');
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