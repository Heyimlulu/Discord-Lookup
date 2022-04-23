import React, { useState, useEffect } from 'react';
import './styles/background.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';
import Api from './services/api';
import * as gtag from './utils/gtag';

function App () {

  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Google Analytics
    gtag.pageview(window.location.pathname);

    // Get today's logs
    Api.getTodayLogs().then(data => {
      setVisits(data);
    });
  }, [])

  return (
    <div className='max-w-[90%] md:max-w-[60%] lg:max-w-[30%] mx-auto'>
      <Header />
      <Background/>
      <BrowserRouter>
        <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route exact path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      <Footer visits={visits} />
    </div>
  )
}

export default App
