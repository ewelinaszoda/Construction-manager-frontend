import React from 'react';
import { Route } from 'react-router-dom';

export const AppRoute = ({component: Component, layout: Layout= React.Fragment, ...rest }) => (
  <Route 
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
    {...rest} 
  />
)