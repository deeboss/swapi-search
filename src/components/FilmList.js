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
    width: calc(33.33% - 10px);
    padding: 15px;
    margin-bottom: 15px;
    background: rgba(255,255,255,0.05);
`


const FilmList = (data) => {
    const [ sortedFilms, setSortedFilms ] = useState({});
    const [ isFinishedSorting, setIsFinishgSorting ] = useState(false);

    const sortByDescending = (obj) => {
        obj.map((i) => {
            i.converted = Number(i.release_date.replace(/-/g, ""));
        })

        obj.sort((a, b) => {
            return b.converted - a.converted;
        });
        
        return obj
    }

    useEffect(() => {
        if (data) {
            setSortedFilms(sortByDescending(data.films));
            setIsFinishgSorting(true);
        }
    }, [data])
    
    return (
        <Fragment>
            <List>
                { isFinishedSorting &&
                    sortedFilms.map(film => (
                        <Item key={film.title}>
                            <h3>{film.title}</h3>
                            <p>Release date: {film.release_date}</p>
                            <p>{film.clipped_opening_crawl}</p>
                        </Item>
                    ))
                }
            </List>
        </Fragment>
    )
}

export default FilmList;