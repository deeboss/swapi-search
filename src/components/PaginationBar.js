import React, { Fragment, useEffect } from "react";
import styled from "styled-components";

const PaginationBar = ({pageOptions, setQuery}) => {

    useEffect(() => {

    }, [pageOptions]);

    const handleClick = (e) => {
        const request_url = new URL(pageOptions[e.target.id]);
        const term = request_url.searchParams.get("search");
        const page = request_url.searchParams.get("page");
        setQuery({
            term, page
        });
    }

    return (
        <Fragment>
            { pageOptions.previous && <button id="previous" onClick={handleClick}>Prev</button> }
            { pageOptions.next && <button id="next" onClick={handleClick}>Next</button> }
        </Fragment>
    )
}

export default PaginationBar;