import styled from 'styled-components';
import { pxToRem } from '~/utils';

export const TitleStyled = styled.h1`
  font-size: ${pxToRem(24)};
  color: ${({ theme }) => theme.text};
  font-weight: 700;
`;
