import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useHistory } from 'react-router-dom';

import {
  getCharacterInfo,
  getHomeworldInfo,
  getSpeciesInfo,
  getFilmInfo,
} from '../lib/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import FilmList from './FilmList';

const CharacterPage = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState();
  const [homeworld, setHomeworld] = useState({});
  const [species, setSpecies] = useState();
  const [films, setFilms] = useState({});

  const signal = axios.CancelToken.source();
  const history = useHistory();
  const handleClose = () => {
    history.push(`/`);
  };

  const handleCharacterRequest = async (id) => {
    try {
      setIsLoading(true);
      const results = await getCharacterInfo(id, signal.token);
      setCharacter(results);
      setIsLoading(false);
    } catch (err) {
      if (!axios.isCancel(err)) {
        toast.error(`Something went wrong.`);
        console.error(err);
      }
    }
  };

  const handleHomeworldRequest = async (data) => {
    try {
      const { homeworld_url } = data;
      const results = await getHomeworldInfo(homeworld_url, signal.token);
      setHomeworld(results);
    } catch (err) {
      if (!axios.isCancel(err)) {
        console.error(err);
      }
    }
  };

  const handleSpeciesRequest = async (data) => {
    try {
      const { species_url } = data;
      const { name } = await getSpeciesInfo(species_url, signal.token);
      setSpecies(name);
    } catch (err) {
      if (!axios.isCancel(err)) {
        console.error(err);
      }
    }
  };

  const handleMultipleFilmRequest = async (data) => {
    try {
      const { films_url } = data;
      const result = await Promise.all(
        films_url.map((url) => {
          return getFilmInfo(url, signal.token);
        })
      );
      setFilms(result);
    } catch (err) {
      if (!axios.isCancel(err)) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    handleCharacterRequest(match.params.id);

    return () => {
      signal.cancel('API Get request canceled');
    };
  }, []);

  useEffect(() => {
    if (character) {
      handleHomeworldRequest(character);
      handleSpeciesRequest(character);
      handleMultipleFilmRequest(character);
    }

    return () => {
      signal.cancel('Component unmounted, canceling promises');
    };
  }, [character]);

  return (
    <>
      {!isLoading ? (
        <Wrapper>
          <Header>
            <Container>
              {character && (
                <Title>
                  {character.name}
                  {species && <SpeciesText>({species})</SpeciesText>}
                </Title>
              )}
              {homeworld.name && (
                <Subtitle>
                  From {homeworld.name} (population: {homeworld.population})
                </Subtitle>
              )}
            </Container>
            <Container>
              <CloseButton onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </CloseButton>
            </Container>
          </Header>
          <Container>
            {films[0] && (
              <>
                <LabelTitle>Film(s) appeared in:</LabelTitle>
                <div>{films && <FilmList films={films} />}</div>
              </>
            )}
          </Container>
        </Wrapper>
      ) : (
        <Loader>
          <FontAwesomeIcon icon={faCircleNotch} size="6x" spin />
        </Loader>
      )}
    </>
  );
};

export default CharacterPage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  padding-bottom: 0.75em;
  margin-bottom: 2.5em;

  @media only screen and (min-width: 600px) {
    align-items: center;
  }
`;

const LabelTitle = styled.h4`
  text-align: center;
  margin-bottom: 30px;

  @media only screen and (min-width: 600px) {
    align-items: left;
  }
`;

const CloseButton = styled.span`
  cursor: pointer;
  background: rgba(255, 255, 255, 0);
  padding: 15px;
  border-radius: 40px;
  position: relative;

  svg {
    pointer-events: none;
  }

  &:after {
    content: 'Close';
    font-size: smaller;
    font-weight: bolder;
    padding: 4px;
    bottom: 5px;
    position: absolute;
    left: 50%;
    bottom: -30px;
    background: black;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
    z-index: 5;
    transition: all 0.25s ease-in-out;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);

    &:after {
      opacity: 1;
      transform: translate(-50%, -40%);
      transition: all 0.25s ease-in-out;
    }
  }
`;
const Wrapper = styled.div``;

const Container = styled.div``;

const Loader = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: 1.5rem;
  @media only screen and (min-width: 600px) {
    font-size: 2.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.92rem;
  @media only screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

const SpeciesText = styled.span`
  margin-left: 8px;
`;
