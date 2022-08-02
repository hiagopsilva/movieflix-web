/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { Footer, Header, If } from '~/components';
import {
  Banner,
  CardFilm,
  Container,
  Content,
  ContentAuthor,
  ContentCardFilm,
  Description,
  Director,
  Line,
  Producer,
  Title,
  Wrapper,
  WrapperContent,
  WrapperListFilms,
} from './styles';

type Props = {
  filmList: any[];
};

const Home: FC<Props> = ({ filmList }): JSX.Element => (
  <Wrapper>
    <Container>
      <Header />

      <Content>
        <WrapperContent>
          <h1>Lista de Filmes</h1>

          <span>Total de {filmList.length} resultados</span>
        </WrapperContent>

        <WrapperListFilms>
          <If condition={!isEmpty(filmList)}>
            {filmList.map((item: any) => (
              <CardFilm>
                <Banner src={item.banner} />
                <ContentCardFilm>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                  <ContentAuthor>
                    <Line>
                      <h4>Diretor: &nbsp;</h4>

                      <Director>{item.director}</Director>
                    </Line>
                    <Line>
                      <h4>Produtor: &nbsp;</h4>
                      <Producer> {item.producer}</Producer>
                    </Line>
                  </ContentAuthor>
                </ContentCardFilm>
              </CardFilm>
            ))}
          </If>
        </WrapperListFilms>
      </Content>

      <Footer />
    </Container>
  </Wrapper>
);

export default Home;
