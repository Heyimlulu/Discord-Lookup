import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import ReactGA from 'react-ga';
import './index.css';
import './styles/custom.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import * as gtag from './utils/gtag';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Google Analytics
ReactGA.initialize(gtag.GA_TRACKING_ID);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </ApolloProvider>,
);
