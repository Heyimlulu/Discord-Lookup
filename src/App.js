import React, { useState, useEffect } from 'react';

// Google Analytics
import ReactGA from 'react-ga';

// STYLES
import './styles/background.css';

// COMPONENTS
import Header from './components/Header';
import AppFooter from './components/Footer';
import Form from './components/Form';
import Background from './components/Background';
import Card from './components/Card';

// SERVICES
import Api from './services/api';

function App () {

  const [discordUser, setDiscordUser] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
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

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;

    // Tell that input field only accept numbers
    if (value === '' || regex.test(value)) {
      setUserInput(value);
    }

    // Enable button on 15th numbers
    if (value.length >= 15) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  const handleSubmit = (e) => {
    e.prevendDefault();
    fetchUser();
  }

  const handleKeyUp = (e) => {
    const value = e.target.value;

    if (e.key === "Enter" && value.length >= 15) {
      fetchUser();
    }
  }

  const handleClick = () => {
    fetchUser();
  }

  const fetchUser = async () => {
    setIsReady(false);
    setIsLoading(true);
    setIsError(false);
    setIsDisabled(true);

    Api.getUser(userInput).then(data => {
      setDiscordUser(data);
      setIsReady(true);
      setIsLoading(false);
      setUserInput('');
    }).catch(error => {
      setIsError(true);
      setIsLoading(false);
      setIsDisabled(false);
      setUserInput('');
    });
  }

  return (
    <>
      <Background/>
      <Header />
      <main className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-4xl lg:px-8 pb-8 sm:pb-16'>
        <div>
          <Form handleChange={handleChange} handleKeyUp={handleKeyUp} handleSubmit={handleSubmit} userInput={userInput} handleClick={handleClick} isDisabled={isDisabled} isLoading={isLoading} />
          <Card isReady={isReady} isError={isError} discordUser={discordUser} />
        </div>
      </main>
      <AppFooter visits={visits} />
    </>
  )
}

export default App
