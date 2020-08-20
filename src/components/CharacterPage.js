import React, { Fragment, useState, useEffect } from "react";
import { getCharacterInfo } from '../lib/api';
import { retrieveBasicCharacterInfo, retrieveFilmDetails } from '../lib/util';

import styled from "styled-components";

import FilmList from './FilmList';

const Title = styled.h1`

`

const CharacterPage = ({match}) => {

    const [ characterDetails, setCharacterDetails ] = useState({})

    const handleCharacterRequest = async (id) => {
        let characterDetails = await getCharacterInfo(id);
        setCharacterDetails(characterDetails);

        characterDetails = await retrieveBasicCharacterInfo(characterDetails);
        setCharacterDetails(characterDetails);

        const films = await retrieveFilmDetails(characterDetails);
        setCharacterDetails({...characterDetails, films: films});
    }

    useEffect(() => {
        handleCharacterRequest(match.params.id);
    }, [match.params.id])

    return (
        <Fragment>
            <Title>
                {characterDetails.name}
            </Title>
            <p>
                From {characterDetails.homeworld} (population: {characterDetails.homeworld_population})
            </p>
            <p>
                {characterDetails.species}
            </p>
            <hr />
            <div>
                <h4>Films appeared in:</h4>
                { characterDetails.films ? <FilmList films={characterDetails.films}/> : <p>Loading...</p> }
            </div>
        </Fragment>
    )
}

export default CharacterPage;