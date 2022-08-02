import React, { FC } from 'react';

import { Container } from './styles';

type Props = { onClick: () => void; label: string };

const Button: FC<Props> = ({ onClick, label, ...rest }) => (
  <Container onClick={onClick} {...rest}>
    <span>{label}</span>
  </Container>
);

export default Button;
