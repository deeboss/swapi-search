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
  width: calc(50% - 15px);
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div``;

const Title = styled.h3`
  // text-transform: uppercase;
  font-size: 1.4rem;
  margin-top: 0;
  font-weight: bolder;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.85;
  margin: 20px 0;
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
