import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { getCharacterInfo } from '../lib/api';
import { retrieveBasicCharacterInfo, retrieveFilmDetails } from '../lib/util';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


import FilmList from './FilmList';

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

const Container = styled.div`
`

const Title = styled.h1`

`


const Subtitle = styled.p`

`

const SpeciesText = styled.span`
    margin-left: 8px;
`

const CharacterPage = ({match}) => {
    const [ characterDetails, setCharacterDetails ] = useState({})
    const history = useHistory();

    const handleClose = () => {
        history.push(`/`);
    }

    const handleCharacterRequest = async (id) => {
        try {
            let characterDetails = await getCharacterInfo(id);
            setCharacterDetails(characterDetails);
    
            characterDetails = await retrieveBasicCharacterInfo(characterDetails);
            setCharacterDetails(characterDetails);
    
            const films = await retrieveFilmDetails(characterDetails);
            setCharacterDetails({...characterDetails, films: films});
        } catch (error) {
            console.error(error);
            return Promise.reject(error);
        }
    }

    useEffect(() => {
        handleCharacterRequest(match.params.id);
    }, [match.params.id])

    return (
        <Fragment>
            <Header>
                <Container>
                    <Title>
                        {characterDetails.name}

                        { characterDetails.species &&
                            <SpeciesText>({characterDetails.species})</SpeciesText>
                        }
                    </Title>
                    { characterDetails.homeworld_name &&
                        <Subtitle>From {characterDetails.homeworld_name} (population: {characterDetails.homeworld_population})</Subtitle>
                    }
                </Container>
                <Container>
                    <CloseButton onClick={handleClose}>
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </CloseButton>
                </Container>
            </Header>
            <div>
                { characterDetails.films_arr &&
                    <Fragment>
                        <h4>Films appeared in:</h4>
                        <div>
                            { characterDetails.films && <FilmList films={characterDetails.films}/> }
                        </div>
                    </Fragment>
                }
            </div>
        </Fragment>
    )
}

export default CharacterPage;