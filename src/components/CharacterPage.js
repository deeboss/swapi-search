import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { getSpeciesInfo, getHomeworldInfo, getFilmInfo } from '../lib/api';
import styled from "styled-components";

import FilmList from './FilmList';

const Title = styled.h1`

`

const Footnote = styled.small`
    color: white;
`

const CharacterPage = ({match}) => {

    const [ characterDetails, setCharacterDetails ] = useState({})

    const getCharacterInfo = async (id) => {

        try {
            const response = await axios.get(`https://swapi.dev/api/people/${id}`);
            const data = response.data
            const name = data.name;
            const filmRequests = data.films.map(film => getFilmInfo(film));
            const moreInfo = await Promise.all([
                getHomeworldInfo(data.homeworld),
                getSpeciesInfo(data.species),
                Promise.all(filmRequests)
            ])

            const results = {
                name: name,
                homeworld: moreInfo[0].homeworld,
                homeworld_population: moreInfo[0].homeworld_population,
                species: moreInfo[1].species,
                films: moreInfo[2]
            }
    
            setCharacterDetails(results);

        } catch (error) {
            console.log("there's an error with the getCharacterInfo");
            console.error(error);
            return Promise.reject(error);
        }
    }
    
    // const getCharacterInfo = async (id) => {
    //     const response = await axios.get(`https://swapi.dev/api/people/${id}`);
    //     const data = response.data
    //     const name = data.name;
    //     const filmRequests = data.films.map(film => getFilmInfo(film));
    //     const filmResolvedPromise = await Promise.all(filmRequests);
    //     const promises = Promise.all([
    //         getHomeworldInfo(data.homeworld),
    //         getSpeciesInfo(data.species),
    //     ])
    //         .then(data => {
    //             return {
    //                 name: name,
    //                 homeworld: data[0].homeworld,
    //                 homeworld_population: data[0].homeworld_population,
    //                 species: data[1].species,
    //                 films: filmResolvedPromise
    //             }
    //         })

    //     const results = await promises;
    //     setCharacterDetails(results);
    // }

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
            {/* <p>
                From {characterDetails.homeworld} (population: {characterDetails.homeworld_population})
            </p>
            <p>
                {characterDetails.species}
            </p> */}
            <hr />
            <div>
                <h4>Films appeared in:</h4>
                { characterDetails.films ? <FilmList films={characterDetails.films}/> : <p>Loading...</p> }
            </div>
        </Fragment>
    )
}

export default CharacterPage;