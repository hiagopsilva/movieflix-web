/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { Button, CardFilm, Footer, Header, If, Loading } from '~/components';
import {
  Container,
  Content,
  Wrapper,
  WrapperContent,
  WrapperListFilms,
} from './styles';

type Props = {
  filmList: any[];
  total: number;
  limitPages: boolean;
  loading: boolean;

  loadingMoreFilms: () => void;
};

const Home: FC<Props> = ({
  filmList,
  total,
  limitPages,
  loading,

  loadingMoreFilms,
}): JSX.Element => (
  <Wrapper>
    <Container>
      <Header />

      <Content>
        <WrapperContent>
          <h1>Lista de Filmes</h1>

          <h4>
            Total de <span>{total} resultados</span>
          </h4>
        </WrapperContent>

        <WrapperListFilms>
          <If condition={!isEmpty(filmList)}>
            {filmList.map((item: any) => (
              <CardFilm dataFilm={item} />
            ))}
          </If>
        </WrapperListFilms>
      </Content>

      <If condition={loading}>
        <Loading />
      </If>

      <If condition={limitPages}>
        <Button onClick={loadingMoreFilms} label="Carregar mais" />
      </If>
      <Footer />
    </Container>
  </Wrapper>
);

export default Home;
