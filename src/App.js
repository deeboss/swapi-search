import React from 'react';
import styled from 'styled-components';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchPage from './components/SearchPage';
import CharacterPage from './components/CharacterPage';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
    <Wrapper>
      <ToastContainer />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/character/:id" component={CharacterPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </HashRouter>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  padding: 2em 20px;
  max-width: 1000px;
  width: 100%;
  margin: auto;

  @media only screen and (min-width: 600px) {
    padding: 4em 20px;
  }
`;
