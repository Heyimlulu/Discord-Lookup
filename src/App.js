import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import './styles/background.css';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';
import Api from './services/api';

function App () {

  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Google Analytics
    ReactGA.initialize('UA-149961763-4');
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Get today's logs
    Api.getTodayLogs().then(data => {
      setVisits(data);
    });
  }, [])

  return (
    <>
      <Header />
      <Background/>
      <Homepage />
      <Footer visits={visits} />
    </>
  )
}

export default App
