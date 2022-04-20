import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import * as gtag from './utils/gtag';
import PageNotFound from './pages/PageNotFound';

// Google Analytics
ReactGA.initialize(gtag.GA_TRACKING_ID);

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div className='text-2xl font-bold text-blurple text-center translate-y-1/2'>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<PageNotFound />} />
                    <Route path='/' element={<App />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    </I18nextProvider>,
    document.getElementById('root')
);
