import React from 'react';
import { createRoot } from 'react-dom/client';
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

createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
);
