import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";


const CharacterList = ({options}) => {
    
    return (
        <Fragment>
            <p></p>
            <ul>
                
            </ul>
            {options.map(character => (
                <p>{character.name}</p>
            ))}
        </Fragment>
    )
}

export default CharacterList;