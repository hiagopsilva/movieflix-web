/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { Footer, Header, If, Loading } from '~/components';
import {
  Banner,
  CardFilm,
  Container,
  Content,
  ContentAuthor,
  ContentCardFilm,
  Line,
  Wrapper,
  WrapperContent,
  WrapperListFilms,
  WrapperLoading,
} from './styles';

type Props = {
  filmList: any[];
  total: number;
  limitPages: boolean;
  loading: boolean;

  loadingMoreFilms: () => void;
};

const Home: FC<Props> = ({
  filmList,
  total,
  limitPages,
  loading,

  loadingMoreFilms,
}): JSX.Element => (
  <Wrapper>
    <Container>
      <Header />

      <Content>
        <WrapperContent>
          <h1>Lista de Filmes</h1>

          <h4>
            Total de <span>{total} resultados</span>
          </h4>
        </WrapperContent>

        <WrapperListFilms>
          <If condition={!isEmpty(filmList)}>
            {filmList.map((item: any) => (
              <CardFilm>
                <Banner src={item.banner} />
                <ContentCardFilm>
                  <span className="title">{item.title}</span>
                  <span className="description">{item.description}</span>
                  <ContentAuthor>
                    <Line>
                      <h4>Diretor: &nbsp;</h4>

                      <span className="director">{item.director}</span>
                    </Line>
                    <Line>
                      <h4>Produtor: &nbsp;</h4>
                      <span className="producer"> {item.producer}</span>
                    </Line>
                  </ContentAuthor>
                </ContentCardFilm>
              </CardFilm>
            ))}
          </If>
        </WrapperListFilms>
      </Content>

      <If condition={loading}>
        <Loading />
      </If>

      <If condition={limitPages}>
        <WrapperLoading onClick={loadingMoreFilms}>
          <span>Carregar mais </span>
        </WrapperLoading>
      </If>
      <Footer />
    </Container>
  </Wrapper>
);

export default Home;
