import React from 'react';
import styled from "styled-components"

import SearchBar from './components/SearchBar';

const Wrapper = styled.div`
  padding: 15px;
  max-width: 800px;
  width: 100%;
  margin: auto;
`

function App() {
  return (
    <Wrapper>
      <SearchBar/>
    </Wrapper>
  );
}

export default App;
