import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { CardFilm, If } from '~/components';
import { Container, Content, Wrapper } from './styles';

type Props = {
  listFilms: any;
  total: number;
};

const WrapperListFilms: FC<Props> = ({ listFilms, total }) => (
  <Wrapper>
    <Container>
      <h1>Lista de Filmes</h1>

      <h4>
        Total de <span>{total} resultados</span>
      </h4>
    </Container>

    <Content>
      <If condition={!isEmpty(listFilms)}>
        {listFilms.map((item: any) => (
          <CardFilm dataFilm={item} />
        ))}
      </If>
    </Content>
  </Wrapper>
);

export default WrapperListFilms;
