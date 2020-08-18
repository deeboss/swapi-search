import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { getSpeciesInfo, getHomeworldInfo, getFilmInfo } from '../lib/api';
import styled from "styled-components";

import FilmCard from './FilmCard';

const Title = styled.h1`

`

const Footnote = styled.small`
    color: white;
`

const CharacterPage = ({match}) => {

    const [ characterDetails, setCharacterDetails ] = useState([])
    
    const getCharacterInfo = (id) => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((response) => response.data)
            .then(async data => {
                const name = data.name;
                const filmRequests = data.films.map(film => getFilmInfo(film));

                const filmResolvedPromise = await Promise.all(filmRequests);

                const promises = Promise.all([
                    getHomeworldInfo(data.homeworld),
                    getSpeciesInfo(data.species),
                ])
                .then(data => {
                    return {
                        name: name,
                        homeworld: data[0].homeworld,
                        homeworld_population: data[0].homeworld_population,
                        species: data[1].species,
                        films: filmResolvedPromise
                    }
                })

                const results = await promises;
                setCharacterDetails(results);
            })
    }

    useEffect(() => {
        getCharacterInfo(match.params.id);
    }, [match.params.id])

    useEffect(() => {
    }, [characterDetails]);
    
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
                {(Object.keys(characterDetails).length !==0) ? <FilmCard data={characterDetails.films} /> : null }
            </div>

            <Footnote>ID number: {match.params.id}</Footnote>
        </Fragment>
    )
}

export default CharacterPage;