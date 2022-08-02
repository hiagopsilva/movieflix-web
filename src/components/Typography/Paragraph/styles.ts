import styled from 'styled-components';
import { pxToRem } from '~/utils';

export const TextStyled = styled.p`
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.text};
  line-height: 22px;
  letter-spacing: 0.3px;
`;
