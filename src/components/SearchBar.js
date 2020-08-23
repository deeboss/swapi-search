import React, { useState, useEffect, useRef } from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import styled from "styled-components";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { searchCharacter, getPageResults} from '../lib/api';

const SearchBar = ({ setCharacters }) => {
    const ref = useRef();
    
    const [ isLoading, setIsLoading ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ searchResultCount, setSearchResultCount ] = useState(0);
    const [ nextPageUrl, setNextPageUrl ] = useState('');
    const [ prevPageUrl, setPrevPageUrl ] = useState('');

    // Focus on search bar on render for better UX
    useEffect(()=>{
        ref.current.focus();
    }, []);

    const handlePageChange = async (event) => {
        try {
            let pageResults
            if (event.target.id === 'next') {
                setCurrentPage(currentPage + 1)
                pageResults = await getPageResults(nextPageUrl)
            } else {
                setCurrentPage(currentPage - 1)
                pageResults = await getPageResults(prevPageUrl)
            }
            setCharacters(pageResults.characters);
            setNextPageUrl(pageResults.next);
            setPrevPageUrl(pageResults.previous);
        } catch (err) {
          if (err.response.status === 404) {
            toast.error("No page found");
          } else if (err.response.status === 500) {
            toast.error("Something went wrong with the API. Please try again later");
          } else {
            console.log(err);
          }
        }
    }

    const handleNewSearch = async (query) => {
        try {
            setIsLoading(true);
            // reset current page to 1 on new query
            setCurrentPage(1);
            const searchResults = await searchCharacter(query);
            setCharacters(searchResults.characters);
            setSearchResultCount(searchResults.count);
            setNextPageUrl(searchResults.next);
            setPrevPageUrl(searchResults.previous);
            setIsLoading(false);
        } catch (err) {
          if (err.response.status === 404) {
            toast.error("Invalid search");
          } else if (err.response.status === 500) {
            toast.error("Something went wrong with the API. Please try again later");
          } else {
            console.log(err);
          }
        }
    };

    // If query is empty, empty the results
    const checkEmpty = (query) => {
        if (!query) {
            setSearchResultCount(0)
            setCharacters([])
        }
    }

    return (
        <>
            <ToastContainer />
            <Title>SWAPI SEARCH</Title>
            <SearchInput
                placeholder="Type to search for a Star Wars character"
                id="characterSearch"
                isLoading={isLoading}
                labelKey={option => option.name}
                onSearch={handleNewSearch}
                onInputChange={checkEmpty}
                minLength={1}
                useCache={false}
                open={false}
                ref={ref}
            />
            { !!searchResultCount &&
                <MenuBar>
                    <Container><p>{searchResultCount} <span>results</span> | Page: { currentPage }</p></Container>
                    <Container>
                        { prevPageUrl &&
                            <Button id="previous" onClick={handlePageChange}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                                Prev
                            </Button>
                        }
                        { nextPageUrl &&
                            <Button id="next" onClick={handlePageChange}>
                                Next
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Button>
                        }
                    </Container>
                </MenuBar>
            }
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