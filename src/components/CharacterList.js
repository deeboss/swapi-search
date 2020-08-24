import React, { useEffect } from 'react';
import styled from 'styled-components';

import CharacterCard from './CharacterCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const CharacterList = ({ characters, isLoading }) => {
  return (
    <>
      {!isLoading ? (
        <List>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </List>
      ) : (
        <Loader>
          <FontAwesomeIcon icon={faCircleNotch} spin size="5x" />
        </Loader>
      )}
    </>
  );
};

export default CharacterList;

const List = styled.ul`
  padding: 0;
  list-style-type: none;
  text-align: center;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Loader = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
