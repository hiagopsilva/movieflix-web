import React, { FC } from 'react';
import { Container, Wrapper } from './styles';

const Loading: FC = () => (
  <Container>
    <Wrapper type="spin" />
  </Container>
);

export default Loading;
