import React, { Fragment, useEffect, useState } from "react";
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

const PaginationBar = ({pageOptions, setQuery}) => {

    const [ disableNext, setDisableNext ] = useState(true);
    const [ disablePrevious, setDisablePrevious ] = useState(true);

    useEffect(() => {
        console.log(pageOptions);

        setDisableNext(pageOptions.next ? false : true);
        setDisablePrevious(pageOptions.previous ? false : true);

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
            { pageOptions.count && 
                <MenuBar>
                    <Container><p>{pageOptions.count} <span>results</span></p></Container>
                    <Container>
                        <Button id="previous" onClick={handleClick} disabled={disablePrevious}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                            Prev
                        </Button>
                        <Button id="next" onClick={handleClick} disabled={disableNext}>
                            Next
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                    </Container>
                </MenuBar>
            }
        </Fragment>
    )
}

export default PaginationBar;