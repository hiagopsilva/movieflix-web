import React, { FC, useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { FilmStore } from '~/stores';

import Home from './Home';

type Props = {
  film: FilmStore;
};

const HomeContainer: FC<Props> = ({ film }): JSX.Element => {
  const [filmList, setFilmList] = useState([]);

  const handle = async () => {
    const data = await film.list();

    setFilmList(data);
  };

  useEffect(() => {
    handle();

    let timer: any = null;

    window.addEventListener(
      'scroll',
      () => {
        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          if (window.scrollY > 700) {
            console.log('aqui', window.screenY, window.scrollY);
          }
        }, 30);
      },
      false,
    );
  }, []);

  return <Home filmList={filmList} />;
};

export default inject('film')(observer(HomeContainer));
