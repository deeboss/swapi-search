import React from 'react';
import styled from 'styled-components';

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <Title>404</Title>
        <Subtitle>This is not the page you are looking for.</Subtitle>
      </Container>
    </>
  );
};

export default NotFoundPage;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Title = styled.h1`
  font-size: 10rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0;
`;
const Subtitle = styled.h2`
  font-size: 3rem;
`;
