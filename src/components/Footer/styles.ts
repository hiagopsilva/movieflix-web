import { getTheme, styled } from '~/utils';

// Colors
const primaryLight = getTheme('primary.light');
const primaryDark = getTheme('primary.dark');

export const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${primaryDark};

  color: ${primaryLight};

  margin-top: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;
