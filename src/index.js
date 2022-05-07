import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga';
import './index.css';
import './styles/custom.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import * as gtag from './utils/gtag';
import App from './App';

// Google Analytics
ReactGA.initialize(gtag.GA_TRACKING_ID);

createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
);
