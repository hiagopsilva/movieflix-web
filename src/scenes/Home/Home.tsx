/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';
import { WrapperListFilms } from '~/atoms';
import { Button, Footer, Header, If, Loading } from '~/components';
import { Container, Wrapper } from './styles';

type Props = {
  listFilms: any[];
  total: number;
  limitPages: boolean;
  loading: boolean;

  loadingMoreFilms: () => void;
};

const Home: FC<Props> = ({
  listFilms,
  total,
  limitPages,
  loading,

  loadingMoreFilms,
}): JSX.Element => (
  <Wrapper>
    <Container>
      <Header />

      <WrapperListFilms listFilms={listFilms} total={total} />

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
