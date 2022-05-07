import React, { useState, useEffect, lazy, Suspense } from 'react';
import './styles/background.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Api from './services/api';
import * as gtag from './utils/gtag';

export default function App () {

  const [lookupsCount, setLookupsCount] = useState(0);

  const Header = lazy(() => import('./components/Header'));
  const Footer = lazy(() => import('./components/Footer'));
  const Background = lazy(() => import('./components/Background'));
  const Homepage = lazy(() => import('./pages/Homepage'));
  const PageNotFound = lazy(() => import('./pages/PageNotFound'));

  useEffect(() => {
    // Google Analytics
    gtag.pageview(window.location.pathname);

    // Get today's logs
    Api.getTodayLogs().then(data => {
      setLookupsCount(data);
    });
  }, [])

  return (
    <div className='max-w-[90%] md:max-w-[60%] lg:max-w-[30%] mx-auto'>
      <Suspense fallback={<div className='text-2xl font-bold text-blurple text-center translate-y-1/2'>Loading...</div>}>
          <Header />
          <Background/>
          <BrowserRouter>
              <Routes>
                  <Route path='*' element={<PageNotFound />} />
                  <Route exact path='/' element={<Homepage />} />
              </Routes>
          </BrowserRouter>
          <Footer lookupsCount={lookupsCount} />
      </Suspense>
    </div>
  )
}
