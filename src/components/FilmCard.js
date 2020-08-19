import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";


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
    padding: 15px;
    margin-bottom: 15px;
    background: rgba(255,255,255,0.05);
`


const FilmCard = (films) => {

    // const [ films ] = useState(films);

    useEffect(() => {
        console.log("films:");
        console.log(films);
    }, [])
    
    return (
        <Fragment>
            <List>
                {films.films.map(film => (
                        <Item key={film.title}>
                            <h3>{film.title}</h3>
                            <p>Release date: {film.release_date}</p>
                            <p>{film.clipped_opening_crawl}</p>
                        </Item>
                ))}
            </List>
        </Fragment>
    )
}

export default FilmCard;