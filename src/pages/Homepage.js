import React, { useState } from 'react';
import Form from '../components/Form';
import Card from '../components/Card';
import Api from '../services/api';

export default function Homepage() {

    const [discordUser, setDiscordUser] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [userInput, setUserInput] = useState('');

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
        <main className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-4xl lg:px-8 pb-8 sm:pb-16'>
            <Form handleChange={handleChange} handleKeyUp={handleKeyUp} handleSubmit={handleSubmit} userInput={userInput} handleClick={handleClick} isDisabled={isDisabled} isLoading={isLoading} />
            <Card isReady={isReady} isError={isError} discordUser={discordUser} />
        </main>
    )
}
