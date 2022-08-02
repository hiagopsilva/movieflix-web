/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';
import { Container } from './styles';

type Props = {};

const Home: FC<Props> = ({}): JSX.Element => (
  <Container>
    <h1>Olá</h1>
  </Container>
);

export default Home;
