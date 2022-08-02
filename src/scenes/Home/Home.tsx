/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';
import { Header } from '~/components';
import {
  Banner,
  CardFilm,
  Container,
  Content,
  ContentCardFilm,
  Description,
  Director,
  Producer,
  Title,
  WrapperContent,
  WrapperListFilms,
} from './styles';

type Props = {
  data?: any;
};

const Home: FC<Props> = ({ data }): JSX.Element => (
  <Container>
    <Header />

    <Content>
      <WrapperContent>
        <h1>Lista de Filmes</h1>
        <span>Total de 12 resultados</span>
      </WrapperContent>

      <WrapperListFilms>
        {data.map((item: any) => (
          <CardFilm>
            <Banner src={item.banner} />
            <ContentCardFilm>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Director>{item.director}</Director>
              <Producer>{item.producer}</Producer>
            </ContentCardFilm>
          </CardFilm>
        ))}
      </WrapperListFilms>
    </Content>
  </Container>
);

export default Home;
