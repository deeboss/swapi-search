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

                { characterDetails.species &&
                    <span>({characterDetails.species})</span>
                }
            </Title>
            { characterDetails.homeworld_name &&
                <p>From {characterDetails.homeworld_name} (population: {characterDetails.homeworld_population})</p>
            }
            <div>
                { characterDetails.films_arr &&
                    <Fragment>
                        <hr />
                        <h4>Films appeared in:</h4>
                        <div>
                            { characterDetails.films ? <FilmList films={characterDetails.films}/> : <p>Loading...</p> }
                        </div>
                    </Fragment>
                }
            </div>
        </Fragment>
    )
}

export default CharacterPage;