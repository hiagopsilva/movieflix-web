import { getTheme, pxToRem, styled } from '~/utils';

// Colors
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');
const primaryDark = getTheme('primary.dark');

export const Container = styled.div`
  width: 100%;
  height: ${pxToRem(140)};
  background-color: ${primaryDark};

  color: ${primaryLight};

  margin-top: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span:last-child {
    color: ${primaryMain};
  }
`;
