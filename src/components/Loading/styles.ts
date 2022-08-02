import { ReactLoading, getTheme, pxToRem, styled } from '~/utils';

// Colors
const primaryLight = getTheme('primary.light');
const primaryDark = getTheme('primary.dark');

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;

  background-color: ${primaryDark};
  opacity: 0.6;
`;
export const Wrapper = styled(ReactLoading)`
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  color: ${primaryLight};

  margin: auto;
`;
