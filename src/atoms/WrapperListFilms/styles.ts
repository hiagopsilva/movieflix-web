import { getTheme, pxToRem, styled } from '~/utils';

// Breakpoint
const inMobile = getTheme('inMobile');
const inTablet = getTheme('inTablet');

// Colors
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  color: ${primaryLight};

  padding: 0 ${pxToRem(50)};
  margin-bottom: ${pxToRem(32)};

  @media ${inMobile} {
    padding: 0 ${pxToRem(24)};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: ${pxToRem(16)} 0;

  h4 {
    margin-top: ${pxToRem(8)};
    padding: 0 ${pxToRem(10)};
  }

  h1 {
    padding: 0 ${pxToRem(10)};
  }

  span {
    color: ${primaryMain};
  }

  @media ${inMobile} {
    flex-direction: column;
  }

  @media ${inTablet} {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;
