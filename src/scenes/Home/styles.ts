import { getTheme, styled } from '~/utils';

// Colors
const primaryContrast = getTheme('primary.contrast');

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  flex: 1;

  height: auto;
`;

export const Container = styled.div`
  width: 100%;
  background: ${primaryContrast};

  display: flex;
  flex-direction: column;

  font-family: 'Manrope';
`;

export const WrapperListFilms = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;
