import React, { useEffect, Suspense } from 'react';
import './styles/background.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import * as gtag from './utils/gtag';

export default function App() {
  const Header = loadable(() => import('./components/Layout/Header'));
  const Footer = loadable(() => import('./components/Layout/Footer'));
  const Background = loadable(() => import('./components/Layout/Background'));
  const Homepage = loadable(() => import('./pages/Homepage'));

  useEffect(() => {
    // Google Analytics
    gtag.send('pageview', window.location.pathname, document.title);
  }, []);

  return (
    <div className='p-4 max-w-[30rem] w-full h-screen flex flex-col mx-auto'>
      <Suspense
        fallback={
          <div className='text-2xl font-bold text-blurple text-center translate-y-1/2'>
            Loading...
          </div>
        }
      >
        <Header />
        <Background />
        <Router>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/:userId' element={<Homepage />} />
            <Route path='*' element={<Homepage />} />
          </Routes>
        </Router>
        <Footer />
      </Suspense>
    </div>
  );
}
