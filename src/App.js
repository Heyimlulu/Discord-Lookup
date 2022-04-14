import React, { useState, useEffect } from 'react';

// Google Analytics
import ReactGA from 'react-ga';

// STYLES
import './background.css'

// COMPONENTS
import Header from './components/Header';
import AppFooter from './components/Footer';
import Form from './components/Form';
import Background from './components/Background';
import Card from './components/Card';

// import { getTodayLogs } from './utils/getTodayLogs';
// import { fetchUser } from './utils/fetchUser';

function App () {

  const [discordUser, setDiscordUser] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    ReactGA.initialize('UA-149961763-4');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
    fetchTodayLogs();
  }, [userInput]);

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

  // const userSearch = () => {
  //   const data = fetchUser(userInput);
  //   setDiscordUser(data);
  // }

  const handleSubmit = (e) => {
    e.prevendDefault();
    // userSearch();
    fetchUser();
  }

  const handleKeyUp = (e) => {
    const value = e.target.value;

    if (e.key === "Enter" && value.length >= 15) {
      // userSearch();
      fetchUser();
    }
  }

  const handleClick = () => {
    // userSearch();
    fetchUser();
  }

  const fetchTodayLogs = async () => {
    await fetch('https://api.lookup.social/api/logs/today')
        .then((response) => response.json())
        .then((response) => {

          const data = response.data;

          setVisits(data.count);

        })
        .catch((error) => {
          console.error(error);
        });
  }

  const fetchUser = async () => {
    setIsReady(false);
    setIsLoading(true);
    setIsError(false);
    setIsDisabled(true);

    await fetch(`https://api.lookup.social/api/user/profile?q=${userInput}`)
    .then((response) => response.json())
    .then((response) => {

      const data = response.data;

      // On error
      if (!response.success) {
        setDiscordUser(data);
        setIsLoading(false);
        setIsError(true);

        // Reset form
        setUserInput('');
        return;
      }

      // On success
      setDiscordUser(data);
      setIsReady(true);
      setIsLoading(false);

      // Reset form
      setUserInput('');
    })
    .catch((error) => {
      setIsLoading(false);
      setIsError(true);

      // Reset form
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
