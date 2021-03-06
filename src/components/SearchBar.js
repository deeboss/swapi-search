import React, { useState, useEffect, useRef } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import styled from 'styled-components';

import { toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { getCharacterSearchResults, getPageResults } from '../lib/api';

const SearchBar = ({ setCharacters, isLoading, setIsLoading }) => {
  const ref = useRef();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [prevPageUrl, setPrevPageUrl] = useState('');
  const [showNoResults, setShowNoResults] = useState(false);

  // Focus on search bar on render for better UX
  useEffect(() => {
    ref.current.focus();
    document.addEventListener('keydown', handleKeypress);

    return () => {
      document.removeEventListener('keydown', handleKeypress);
    };
  }, []);

  const handleKeypress = () => {
    ref.current.focus();
  };

  const handlePageChange = async (event) => {
    try {
      setIsLoading(true);
      let pageResults;
      if (event.target.id === 'next') {
        pageResults = await getPageResults(nextPageUrl);
        setCurrentPage(currentPage + 1);
      } else {
        pageResults = await getPageResults(prevPageUrl);
        setCurrentPage(currentPage - 1);
      }
      setCharacters(pageResults.characters);
      setNextPageUrl(pageResults.next);
      setPrevPageUrl(pageResults.previous);
      setIsLoading(false);
    } catch (err) {
      toast.error(err);
      console.error(err);
    }
  };

  const handleNewSearch = async (query) => {
    try {
      setIsLoading(true);
      // reset current page to 1 on new query
      setCurrentPage(1);
      const searchResults = await getCharacterSearchResults(query);
      setCharacters(searchResults.characters);
      setSearchResultCount(searchResults.count);
      setNextPageUrl(searchResults.next);
      setPrevPageUrl(searchResults.previous);
      setShowNoResults(!searchResults.count);

      setIsLoading(false);
    } catch (err) {
      toast.error(err);
      console.error(err);
    }
  };

  // If query is empty, empty the results
  const checkEmpty = (query) => {
    if (!query) {
      setSearchResultCount(0);
      setCharacters([]);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Title>SWAPI SEARCH</Title>
      <Subtitle>Find your favorite Star Wars character!</Subtitle>
      <SearchInput
        placeholder="Start typing to search"
        id="characterSearch"
        isLoading={isLoading}
        labelKey={(option) => option.name}
        onSearch={handleNewSearch}
        onInputChange={checkEmpty}
        minLength={1}
        useCache={false}
        open={false}
        ref={ref}
      />
      {!!searchResultCount && (
        <MenuBar>
          <Container>
            <p>
              {searchResultCount} <span>results</span>
              <Divider>|</Divider>
              Page: {currentPage}
            </p>
          </Container>
          <Container>
            {prevPageUrl && (
              <Button id="previous" onClick={handlePageChange}>
                <FontAwesomeIcon icon={faChevronLeft} />
                Prev
              </Button>
            )}
            {nextPageUrl && (
              <Button id="next" onClick={handlePageChange}>
                Next
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            )}
          </Container>
        </MenuBar>
      )}

      {showNoResults && !isLoading && (
        <EmptyStateBox>
          <MessageTitle>No results found</MessageTitle>
          <MessageSubtitle>
            Try adjusting your search to find the character you are looking for.
          </MessageSubtitle>
        </EmptyStateBox>
      )}
    </>
  );
};

export default SearchBar;

const Title = styled.h1`
  text-align: center;
  color: #ffe81f;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.5rem;
  margin-top: 0;
  @media only screen and (min-width: 600px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 2.25em;
  @media only screen and (min-width: 600px) {
    font-size: 1.85rem;
  }
`;

const SearchInput = styled(AsyncTypeahead)`
  input {
    padding: 10px 8px;
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 15px;
    font-size: 1.1rem;
    @media only screen and (min-width: 600px) {
      font-size: 1.65rem;
    }
  }
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
`;

const Divider = styled.span`
  display: inline-block;
  margin: 0 10px;
`;

const Container = styled.div``;

const Button = styled.span`
  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
  margin: 8px;
  text-transform: uppercase;

  svg {
    pointer-events: none;
    margin: 0 8px;
  }

  &:last-of-type {
    margin-right: 0px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const EmptyStateBox = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 50px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;

  @media only screen and (min-width: 600px) {
    height: 350px;
  }
`;

const MessageTitle = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  display: block;
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;
const MessageSubtitle = styled.p`
  display: block;
  @media only screen and (min-width: 600px) {
    font-size: 1.25rem;
  }
`;
