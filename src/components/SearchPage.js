import React, { Fragment, useState } from "react";

import SearchBar from './SearchBar';
import CharacterList from './CharacterList';
import PaginationBar from './PaginationBar';

const SearchPage = () => {
    const [ options, setOptions ] = useState([]);
    const [ pageOptions, setPageOptions ] = useState([]);
    const [ query, setQuery ] = useState();

    return (
        <Fragment>
            <SearchBar
                setOptions={setOptions} options={options} setPageOptions={setPageOptions} query={query}/>
            <br /><br /><br /><br /><br /><br />
            { pageOptions && <PaginationBar pageOptions={pageOptions} setQuery={setQuery}/> }
            <CharacterList options={options}/>
        </Fragment>
    )
}

export default SearchPage;