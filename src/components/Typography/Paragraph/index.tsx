import React from 'react';
import { TextStyled } from './styles';

type Props = {
  text: string;
  level?: number;
};

const Paragraph: React.FC<Props> = ({ text, level, ...rest }) => (
  <TextStyled {...{ level, ...rest }}>{text}</TextStyled>
);

export default Paragraph;
