import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FilmList = (data) => {
    const [ films, setFilms ] = useState();

    useEffect(() => {
        const { films } = data;
        const sortByDescending = (obj) => {
            return obj.sort((a, b) => {
                return Date.parse(b.release_date) - Date.parse(a.release_date);
            });
        }
        setFilms(sortByDescending(films));
    }, [])
    
    return (
        <>
            <List>
                { films && 
                    films.map(film => (
                        <Card key={film.title}>
                            <Title>{film.title}</Title>
                            <p>Release date: {film.release_date}</p>
                            <p>{film.opening_crawl}</p>
                        </Card>
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

const Card = styled.li`
    list-style-type: none;
    width: calc(50% - 10px);
    padding: 28px;
    margin-bottom: 15px;
    background: rgba(255,255,255,0.05);
`

const Title = styled.h3`
    // text-transform: uppercase;
    margin-top: 0;
    font-weight: bolder;
`