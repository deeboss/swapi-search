import React from 'react';
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
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
