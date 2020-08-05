// Global Imports
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { ApolloProvider } from "@apollo/client"
// Local Imports
import * as serviceWorker from './serviceWorker';
import WebsiteRouter from './router/router';
import { history } from './router/router_configs';
import Base from './layout/base/Base';
import client from './graphql/client';

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Base>
          <WebsiteRouter />
        </Base>
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
