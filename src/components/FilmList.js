import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FilmList = (data) => {
    const [ isLoading, setIsLoading ] = useState();
    const [ films, setFilms ] = useState();

    const sortByDescending = (obj) => {
        return obj.sort((a, b) => {
            return Date.parse(b.release_date) - Date.parse(a.release_date);
        });
    }

    useEffect(() => {
        const { films } = data;
        setFilms(sortByDescending(films));
    }, [])
    
    return (
        <>
            <List>
                { films && 
                    films.map(film => (
                        <Item key={film.title}>
                            <FilmTitle>{film.title}</FilmTitle>
                            <p>Release date: {film.release_date}</p>
                            <p>{film.clipped_opening_crawl}</p>
                        </Item>
                    ))
                }
            </List>
        </>
    )
}

export default FilmList;


const List = styled.ul`
    padding: 0;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Item = styled.li`
    list-style-type: none;
    width: calc(50% - 10px);
    padding: 20px;
    text-align: center;
    margin-bottom: 15px;
    background: rgba(255,255,255,0.05);
    color: #ffe81f;
`

const FilmTitle = styled.h2`
    text-transform: uppercase;
    font-weight: bold;
`