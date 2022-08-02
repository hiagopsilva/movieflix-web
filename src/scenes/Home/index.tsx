import React, { FC } from 'react';
import { inject, observer } from 'mobx-react';
import { UserStore } from '~/stores';

import Home from './Home';

type Props = {
  user?: UserStore;
};

const HomeContainer: FC<Props> = (): JSX.Element => <Home />;
// export default inject(
//   'user',
//   'routing',
//   'talent',
//   'contractor',
//   'job',
// )(observer(HomeContainer));

export default HomeContainer;
