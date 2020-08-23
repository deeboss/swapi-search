import React, { useState } from 'react';

import SearchBar from './SearchBar';
import CharacterList from './CharacterList';

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  return (
    <>
      <SearchBar
        setCharacters={setCharacters}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <CharacterList characters={characters} isLoading={isLoading} />
    </>
  );
};

export default SearchPage;
