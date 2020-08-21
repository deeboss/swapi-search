import React, { useState, useEffect, useRef } from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { getCharacterSearchResults, getSpeciesInfo, getHomeworldInfo } from '../lib/api';

const SearchBar = ({options, setOptions }) => {  
    const ref = useRef();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState();
    const [ numOfPages, setNumOfPages ] = useState();
    const [ count, setCount ] = useState();
    const [ query, setQuery ] = useState();

    // Focus on search bar on render for better UX
    useEffect(()=>{
        ref.current.focus();
    }, []);

    useEffect(() => {
        const initSearch = async () => {
            try {
                const [ options ] = await getCharacterSearchResults(query, currentPage);
                setOptions(options);
            } catch (error) {

            }
        }
        initSearch();
    }, [currentPage]);

    const handleChangePage = (e) => {
        if (e.target.id === 'next') {
            // Go Next
            setCurrentPage(currentPage => currentPage + 1);
        } else if (e.target.id === 'previous') {
            // Go Previous
            setCurrentPage(currentPage => currentPage - 1);
        }
    }

    const handleSearch = async (query, page) => {
        setQuery(query);
        setIsLoading(true); 

        let [ options, count ] = await getCharacterSearchResults(query, page);
        setOptions(options);
        setIsLoading(false);
        setCount(count);
        const numOfPages = Math.round(Math.ceil(count / 10));
        setNumOfPages(numOfPages);
        setCurrentPage(1);

        // const moreInfoRequests = options.map(async (i) => {
        //     try {
        //         const species = await getSpeciesInfo(i.species_url);
        //         const homeworld = await getHomeworldInfo(i.homeworld_url);
        //         return {
        //             name: i.name,
        //             id: i.id,
        //             homeworld_name: homeworld.name,
        //             homeworld_population: homeworld.population,
        //             species: species.name
        //         }
        //     } catch (error) {
        //         console.log("there's an error with moreInfo");
        //         console.error(error);
        //         return Promise.reject(error);
        //     }
        // })

        // options = await Promise.all(moreInfoRequests);
        // setOptions(options);
    };
    
    return (
        <>
            <Title>SWAPI SEARCH</Title>
            <SearchInput
                id="characterSearch"
                isLoading={isLoading}
                labelKey={(option) => `${option.name}`}
                minLength={1}
                onSearch={handleSearch}
                options={options}
                ref={ref}
                placeholder="Type to search for a Star Wars character"
            />
                { count ? <MenuBar>
                    <Container><p>{count} <span>results</span></p></Container>
                    <Container>
                        { currentPage > 1 &&
                            <Button id="previous" onClick={handleChangePage}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                                Prev
                            </Button> }
                        { currentPage < numOfPages &&
                            <Button id="next" onClick={handleChangePage}>
                                Next
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Button> }
                    </Container>
                </MenuBar>
                : <></> }
        </>
    )
}

export default SearchBar;


const Title = styled.h1`
    text-align: center;
    color: #ffe81f;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 3.5rem;
`

const SearchInput = styled(AsyncTypeahead)`
    input {
        padding: 8px 6px;
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        border-radius: 3px;
        border: 1px solid #ccc;
        font-size: larger;
    }

    .dropdown-menu {
        display: none!important;
        z-index: 5;
        box-shadow: 0px 4px 12px rgba(0,0,0,0.2);
        border-radius: 2px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        background: white;

        a {
            display: block;
            padding: 12px 6px;
            color: #000000;
            text-decoration: none;

            &:hover {
                background: rgba(0,0,0,0.08);
            }
        }

        p {
            margin: 0;
            color: #000000;
        }
    }
`

const MenuBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

const Container = styled.div`

`

const Button = styled.span`
    display: inline-block;
    cursor: pointer;

    svg {
        pointer-events: none;
    }

    &:first-of-type {
        svg {
            margin-right: 10px;
        }
    }

    &:last-of-type {
        margin-left: 20px;

        svg {
            margin-left: 8px;
        }
    }

    &[disabled] {
        opacity: 0.5;
        pointer-events: none;
    }
`