import { IconLogo } from '~/assets/svg';
import { getTheme, pxToRem, styled } from '~/utils';

// Colors
const primaryMain = getTheme('primary.main');
const primaryDark = getTheme('primary.dark');

export const Container = styled.div`
  width: 100%;
  height: ${pxToRem(60)};

  background-color: ${primaryDark};
  padding: 0 ${pxToRem(60)};

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${primaryMain};
    font-size: ${pxToRem(24)};
    font-family: 'Manrope';
  }
`;

export const IconLogoStyled = styled(IconLogo).attrs({
  width: pxToRem(40),
  height: pxToRem(40),
})`
  margin-right: ${pxToRem(6)};
`;
