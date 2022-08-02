import React, { FC, useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { FilmStore } from '~/stores';

import Home from './Home';

type Props = {
  film: FilmStore;
};

const HomeContainer: FC<Props> = ({ film }): JSX.Element => {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limitPages, setLimitPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadingFilms = async () => {
    setLoading(true);

    const data = await film.list(page);

    setTotal(data.total);
    setLimitPages(data.pages);
    setPage((page) => ++page);

    setLoading(false);
  };

  useEffect(() => {
    loadingFilms();
  }, []);

  return (
    <Home
      listFilms={film.data}
      total={total}
      loadingMoreFilms={loadingFilms}
      limitPages={limitPages >= page}
      loading={loading}
    />
  );
};

export default inject('film')(observer(HomeContainer));
