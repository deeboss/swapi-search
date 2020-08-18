import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { getSpeciesInfo, getHomeworldInfo } from '../lib/api';
import styled from "styled-components";

const Title = styled.h1`

`

const Footnote = styled.small`
    color: white;
`

const CharacterPage = ({match}) => {

    const [ characterDetails, setCharacterDetails ] = useState([])

    const getMultipleFilmInfo = async obj => {
        const promises = obj.map((i) => {
            axios.get(i)
                .then((response) => response.data)
                .then(data => {
                    // console.log(data);

                    return {
                        title: data.title,
                        opening_crawl: data.opening_crawl,
                        release_date: data.release_date
                    }
                })
        });

        console.log(promises);
    };

    const getFilmInfo = url => {
        return axios.get(`${url}`)
        .then((response) => response.data)
        .then((data) => {

            // Prettify number by adding commas after every 3 digits
            console.log(data);
            return {
                film_title: data.title,
                film_release_date: data.release_date,
                film_opening_crawl: data.opening_crawl
            }
        })
        .catch(error => { console.errors(error); return Promise.reject(error); });
    }
    
    const getCharacterInfo = (id) => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((response) => response.data)
            .then(async data => {
                const name = data.name;
                // const filmRequests = 
                
                const promises = Promise.all([
                    getHomeworldInfo(data.homeworld),
                    getSpeciesInfo(data.species),
                    getFilmInfo(data.films[0])
                ])
                .then(data => {
                    console.log(data);
                    return {
                        name: name,
                        homeworld: data[0].homeworld,
                        homeworld_population: data[0].homeworld_population,
                        species: data[1].species
                    }
                })

                const results = await promises;
                console.log(results);

                setCharacterDetails(results);
            })
    }

    useEffect(() => {
        getCharacterInfo(match.params.id);
    }, [])
    
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

            <div>
                <h4>Films appeared in:</h4>
                <hr />
            </div>

            <Footnote>ID number: {match.params.id}</Footnote>
        </Fragment>
    )
}

export default CharacterPage;