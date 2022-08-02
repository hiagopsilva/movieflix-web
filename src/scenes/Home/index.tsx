import React, { FC, useEffect, useState } from 'react';
import { FilmStore } from '~/stores';
import { inject, observer } from '~/utils';

import Home from './Home';

type Props = {
  film: FilmStore;
};

const HomeContainer: FC<Props> = ({ film }): JSX.Element => {
  const [loading, setLoading] = useState(true);

  const loadingFilms = async () => {
    setLoading(true);

    await film.list();

    setLoading(false);
  };

  useEffect(() => {
    loadingFilms();
  }, []);

  return (
    <Home
      listFilms={film.data}
      total={film.total}
      loadingMoreFilms={loadingFilms}
      limitPages={film.limitPages >= film.page}
      loading={loading}
    />
  );
};

export default inject('film')(observer(HomeContainer));
