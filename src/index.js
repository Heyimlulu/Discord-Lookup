import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import './styles/custom.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import * as gtag from './utils/gtag';

// Google Analytics
ReactGA.initialize(gtag.GA_TRACKING_ID);

const AppRoot = lazy(() => import('./App'));

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div className='text-2xl font-bold text-blurple text-center translate-y-1/2'>Loading...</div>}>
            <AppRoot />
        </Suspense>
    </I18nextProvider>,
    document.getElementById('root')
);
