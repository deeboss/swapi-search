import React, { useState } from "react";

import SearchBar from './SearchBar';
import CharacterList from './CharacterList';

const SearchPage = () => {
    const [ characters, setCharacters ] = useState([]);

    return (
        <>
            <SearchBar setCharacters={setCharacters}/>
            <CharacterList characters={characters}/>
        </>
    )
}

export default SearchPage;