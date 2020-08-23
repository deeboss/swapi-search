import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FilmList = (data) => {
  const [films, setFilms] = useState();

  useEffect(() => {
    const { films } = data;
    const sortByDescending = (obj) => {
      return obj.sort((a, b) => {
        return Date.parse(b.release_date) - Date.parse(a.release_date);
      });
    };
    setFilms(sortByDescending(films));
  }, []);

  return (
    <>
      <List>
        {films &&
          films.map((film) => (
            <Card key={film.title}>
              <Content>
                <Title>{film.title}</Title>
                <Description>{film.opening_crawl}</Description>
              </Content>
              <Footer>
                <p>Release date: {film.release_date}</p>
              </Footer>
            </Card>
          ))}
      </List>
    </>
  );
};

export default FilmList;

const List = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.li`
  list-style-type: none;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media only screen and (min-width: 600px) {
    width: calc(50% - 15px);
    margin-bottom: 30px;
  }
`;

const Content = styled.div``;

const Title = styled.h3`
  // text-transform: uppercase;
  font-size: 1.15rem;
  margin-top: 0;
  font-weight: bolder;
  @media only screen and (min-width: 600px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  line-height: 1.65;
  margin: 20px 0;

  @media only screen and (min-width: 600px) {
    font-size: 1.1rem;
    line-height: 1.85;
  }
`;

const Footer = styled.div`
  font-size: 1rem;
  align-self: bottom;
  p {
    width: 100%;
    padding-top: 15px;
    margin-bottom: 0;
    border-top: 1px solid white;
  }
`;
