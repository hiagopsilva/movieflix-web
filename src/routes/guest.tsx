import React from 'react';
import { Location } from 'history';
import { isEmpty } from 'lodash';
import { Redirect, Route } from 'react-router-dom';
import { If } from '~/components';
import { Routing } from '~/routes';
import { Storage } from '~/services';

type Props = {
  component: React.ElementType;
  location?: Location;
  path: string;
  exact?: boolean;
};

const PublicRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const token = Storage.getToken();
  return (
    <Route
      {...rest}
      render={(props): JSX.Element => (
        <>
          <If condition={isEmpty(token)}>
            <Component {...props} />
          </If>
          <If condition={!isEmpty(token)}>
            <Redirect
              to={{
                pathname: Routing.HOME,
                state: { from: props.location.pathname },
              }}
            />
          </If>
        </>
      )}
    />
  );
};

export default PublicRoute;
