import React from 'react';
import styled from "styled-components"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchPage from './components/SearchPage';
import CharacterPage from './components/CharacterPage';

const Wrapper = styled.div`
  padding: 4em 20px;
  max-width: 800px;
  width: 100%;
  margin: auto;
`

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SearchPage} />
          <Route exact path='/character/:id' component={CharacterPage} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
