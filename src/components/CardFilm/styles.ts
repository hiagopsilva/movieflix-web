import { getTheme, pxToRem, styled } from '~/utils';

// Breakpoint
const inMobile = getTheme('inMobile');
const inTablet = getTheme('inTablet');

// Colors
const primaryMain = getTheme('primary.main');
const primaryDark = getTheme('primary.dark');
const primaryText = getTheme('primary.text');

export const Container = styled.div`
  width: 25%;
  transform: scale(0.9);

  background-color: ${primaryDark};
  border-radius: ${pxToRem(4)};
  margin-top: ${pxToRem(8)};

  display: flex;
  flex-direction: column;

  span {
    display: block;
  }

  span.description {
    color: ${primaryText};
  }

  &:hover {
    cursor: pointer;
    transform: scale(1);
    z-index: 1;

    img {
      filter: grayscale(0%);
      filter: blur(0px);
    }

    span.title {
      color: ${primaryMain};
    }

    h4 {
      color: ${primaryMain};
    }
  }

  @media ${inMobile} {
    width: 100%;
    margin-top: 0;
  }

  @media ${inTablet} {
    width: 50%;
    margin-top: 0;
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: auto;

  filter: blur(0.2px) grayscale(100%);

  border-top-right-radius: ${pxToRem(4)};
  border-top-left-radius: ${pxToRem(4)};
`;

export const ContentCardFilm = styled.div`
  padding: ${pxToRem(8)} ${pxToRem(16)};

  display: flex;
  flex-direction: column;

  flex: 1;

  h4 {
    font-size: ${pxToRem(12)};
  }

  span.title {
    font-size: ${pxToRem(22)};
  }

  span.description {
    font-size: ${pxToRem(12)};
    text-align: justify;
  }

  @media ${inMobile} {
    padding: ${pxToRem(24)} ${pxToRem(20)};
  }
`;

export const ContentAuthor = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: auto;

  div.line {
    display: flex;
    flex-direction: row;

    align-items: center;

    &:first-child {
      margin-top: ${pxToRem(30)};
    }
  }
`;

export const Line = styled.div``;
