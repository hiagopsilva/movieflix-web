import React from 'react';
import { Location } from 'history';
import { Route } from 'react-router-dom';

type Props = {
  component: React.ElementType;
  location?: Location;
  path: string;
  exact?: boolean;
};

const PublicRoute: React.FC<Props> = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props): JSX.Element => <Component {...props} />} />
);

export default PublicRoute;
