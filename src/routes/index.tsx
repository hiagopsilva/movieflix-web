import React from 'react';
import { inject, observer } from 'mobx-react';
import { Switch } from 'react-router-dom';
import { Home } from '~/scenes';
import Guest from './guest';
import Private from './private';
import { Routing } from './routing';

const RoutesContainer: React.FC = () => (
  <Switch>
    <Guest exact path={Routing.HOME} component={Home} />
    <Private path="/home" component={Home} />
  </Switch>
);

export { Routing };
export default inject('routing')(observer(RoutesContainer));
