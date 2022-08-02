import React from 'react';

import { TitleStyled } from './styles';

type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text, ...rest }) => (
  <TitleStyled {...rest}>{text}</TitleStyled>
);

export default Title;
