import React, { useEffect, Suspense } from 'react';
import './styles/background.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as gtag from './utils/gtag';
import loadable from '@loadable/component';

export default function App () {

  const Header = loadable(() => import('./components/Header'));
  const Footer = loadable(() => import('./components/Footer'));
  const Homepage = loadable(() => import('./pages/Homepage'));
  const PageNotFound = loadable(() => import('./pages/PageNotFound'));
  const Background = loadable(() => import('./components/Background'));

  useEffect(() => {
    // Google Analytics
    gtag.pageview(window.location.pathname);
  }, [])

  return (
    <div className='p-4 max-w-[30rem] w-full h-screen flex flex-col mx-auto'>
      <Suspense fallback={<div className='text-2xl font-bold text-blurple text-center translate-y-1/2'>Loading...</div>}>
          <Header />
          <Background />
          <BrowserRouter>
              <Routes>
                  <Route path='*' element={<PageNotFound />} />
                  <Route exact path='/' element={<Homepage />} />
              </Routes>
          </BrowserRouter>
          <Footer />
      </Suspense>
    </div>
  )
}
