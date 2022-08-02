import React from 'react';

import { Logo } from '~/assets/img';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <img src={Logo} alt="Logo MovieFlix" />

    <h1>MovieFlix</h1>
  </Container>
);

export default Header;
