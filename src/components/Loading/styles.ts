import ReactLoading from 'react-loading';
import { getTheme, styled } from '~/utils';

// Colors
const primaryContrast = getTheme('primary.contrast');
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');
const primaryDark = getTheme('primary.dark');
const primaryText = getTheme('primary.text');

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;

  background-color: ${primaryDark};
  opacity: 0.6;
`;
export const Wrapper = styled(ReactLoading)`
  width: 40px;
  height: 40px;
  color: ${primaryLight};

  margin: auto;
`;
