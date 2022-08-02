import { getTheme, pxToRem, styled } from '~/utils';

// Colors
const primaryMain = getTheme('primary.main');
const primaryDark = getTheme('primary.dark');

export const Container = styled.button`
  margin: auto;

  margin-bottom: ${pxToRem(20)};

  cursor: pointer;
  background-color: ${primaryMain};
  padding: ${pxToRem(8)} ${pxToRem(16)};
  border-radius: ${pxToRem(8)};
  border: none;

  span {
    font-size: ${pxToRem(16)};
    color: ${primaryDark};
    font-weight: bold;
  }

  &:hover {
    background-color: ${primaryDark};
    span {
      color: ${primaryMain};
    }
  }
`;
