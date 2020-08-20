import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

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

    svg {
        pointer-events: none;
    }
`

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
            <MenuBar>
                <Container>{ pageOptions.count && <p>{pageOptions.count} <span>results</span></p> }</Container>
                <Container>
                    { pageOptions.previous &&
                        <Button id="previous" onClick={handleClick}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                            Prev
                        </Button>
                    }
                    { pageOptions.next &&
                        <Button id="next" onClick={handleClick}>
                            Next
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                    }
                </Container>
            </MenuBar>
        </Fragment>
    )
}

export default PaginationBar;