import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactGA.initialize('UA-149961763-4');

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </I18nextProvider>,
    document.getElementById('root')
);
