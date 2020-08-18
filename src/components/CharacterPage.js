import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { getSpeciesInfo, getHomeworldInfo } from '../lib/api';
import styled from "styled-components";
import SearchBar from "./SearchBar";

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
                console.log(data);
                const name = data.name;
                const promises = Promise.all([
                    getHomeworldInfo(data.homeworld),
                    getSpeciesInfo(data.species)
                ])
                .then(data => {
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

            <Footnote>Retrieve character details of id: {match.params.id}</Footnote>
        </Fragment>
    )
}

export default CharacterPage;