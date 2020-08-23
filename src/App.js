import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchPage from './components/SearchPage';
import CharacterPage from './components/CharacterPage';
import NotFoundPage from './components/NotFoundPage';

const Wrapper = styled.div`
  padding: 4em 20px;
  max-width: 1000px;
  width: 100%;
  margin: auto;
`;

const App = () => {
  return (
    <Wrapper>
      <ToastContainer />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/character/:id" component={CharacterPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
