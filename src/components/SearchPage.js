import React, { useState } from "react";

import SearchBar from './SearchBar';
import CharacterList from './CharacterList';

const SearchPage = () => {
    const [ options, setOptions ] = useState([]);

    return (
        <>
            <SearchBar setOptions={setOptions} options={options}/>
            <CharacterList options={options}/>
        </>
    )
}

export default SearchPage;