import { getTheme, styled } from '~/utils';

const screenHeight = getTheme('screenHeight');

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: auto;
`;

export const Container = styled.div`
  width: 100%;
  background: #313136;

  /* background: #111411; */
  /* color: #46eb34; */

  display: flex;
  flex-direction: column;

  font-family: 'Manrope';
`;

export const Content = styled.div`
  width: 100%;

  color: #fff;

  display: flex;
  flex-direction: column;

  font-family: 'Manrope';

  padding: 0 50px 0 50px;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;

  margin: 16px 0;

  span {
    margin-top: 8px;
    padding: 0 10px 0 10px;
  }

  h1 {
    padding: 0 10px 0 10px;
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

  background-color: #111411;
  border-radius: 4px;
  margin-top: 8px;

  display: flex;
  flex-direction: column;

  span {
    display: block;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1);
    z-index: 1;

    img {
      filter: grayscale(0%);
      filter: blur(0px);
    }
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 180px;

  filter: blur(0.5px) grayscale(100%);

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

export const Title = styled.span`
  font-size: 22px;
`;

export const Description = styled.span`
  font-size: 12px;
  text-align: justify;
`;

export const Director = styled.span``;

export const Producer = styled.span``;
