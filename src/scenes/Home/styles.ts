import { getTheme, styled } from '~/utils';

// Breakpoint
const inMobile = getTheme('inMobile');
const inTablet = getTheme('inTablet');

// Colors
const primaryContrast = getTheme('primary.contrast');
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');
const primaryDark = getTheme('primary.dark');
const primaryText = getTheme('primary.text');

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

export const Content = styled.div`
  width: 100%;

  color: ${primaryLight};

  display: flex;
  flex-direction: column;

  font-family: 'Manrope';

  padding: 0 50px 0 50px;

  margin-bottom: 32px;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 16px 0;

  @media ${inMobile} {
    flex-direction: column;
  }

  @media ${inTablet} {
    flex-direction: column;
  }

  h4 {
    margin-top: 8px;
    padding: 0 10px;
  }

  h1 {
    padding: 0 10px;
  }

  span {
    color: ${primaryMain};
  }
`;

export const WrapperListFilms = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

export const CardFilm = styled.div`
  width: 25%;
  transform: scale(0.9);

  background-color: ${primaryDark};
  border-radius: 4px;
  margin-top: 8px;

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

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const ContentCardFilm = styled.div`
  padding: 8px 16px;

  display: flex;
  flex-direction: column;

  flex: 1;

  h4 {
    font-size: 12px;
  }

  span.title {
    font-size: 22px;
  }

  span.description {
    font-size: 12px;
    text-align: justify;
  }
`;

export const ContentAuthor = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: auto;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  &:first-child {
    margin-top: 30px;
  }
`;

export const WrapperLoading = styled.button`
  margin: auto;

  margin-bottom: 20px;

  cursor: pointer;
  background-color: ${primaryMain};
  padding: 8px 16px;
  border-radius: 8px;
  border: none;

  span {
    font-size: 16px;
    color: ${primaryDark};
  }
`;
