import React, { FC } from 'react';
import { Banner, Container, ContentAuthor, ContentCardFilm } from './styles';

type Props = {
  dataFilm: Film.Item;
};

const CardFilm: FC<Props> = ({ dataFilm }) => (
  <Container>
    <Banner src={dataFilm.banner} />
    <ContentCardFilm>
      <span className="title">{dataFilm.title}</span>
      <span className="description">{dataFilm.description}</span>
      <ContentAuthor>
        <div className="line">
          <h4>Diretor: &nbsp;</h4>

          <span className="director">{dataFilm.director}</span>
        </div>
        <div className="line">
          <h4>Produtor: &nbsp;</h4>
          <span className="producer"> {dataFilm.producer}</span>
        </div>
      </ContentAuthor>
    </ContentCardFilm>
  </Container>
);

export default CardFilm;
