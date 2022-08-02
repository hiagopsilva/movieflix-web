import { getTheme, styled } from '~/utils';

// Colors
const primaryMain = getTheme('primary.main');
const primaryDark = getTheme('primary.dark');

export const Container = styled.div`
  width: 100%;
  height: 60px;

  background-color: ${primaryDark};
  padding: 0 60px 0 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${primaryMain};
    font-size: 24px;
    font-family: 'Manrope';
  }
`;
