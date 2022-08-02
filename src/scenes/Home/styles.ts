import { styled } from '~/utils';

export const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  background: #313136;
  /* background: #111411; */

  /* color: #46eb34; */

  display: flex;
  flex-direction: column;

  font-family: 'Manrope';
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;

  color: #fff;

  display: flex;
  flex-direction: column;

  font-family: 'Manrope';

  padding: 0 60px 0 60px;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;

  margin: 16px 0;

  span {
    margin-top: 8px;
  }
`;

export const WrapperListFilms = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-wrap: wrap;
`;

export const CardFilm = styled.div`
  width: 300px;
  height: 300px;

  background-color: #111411;
  border-radius: 8px;
  margin-right: 16px;

  display: flex;
  flex-direction: column;

  &.hover {
    cursor: pointer;
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 180px;

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const ContentCardFilm = styled.div`
  padding: 8px 16px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.span``;

export const Description = styled.span``;

export const Director = styled.span``;

export const Producer = styled.span``;
