import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faIdBadge, faPalette, faStar, faTags } from '@fortawesome/free-solid-svg-icons';

// STYLES
import './background.css'

// COMPONENTS
import AppFooter from './components/AppFooter';
import Form from './components/Form';
import Background from './components/Background';

function App () {

  const [discordUser, setDiscordUser] = useState([]);
  const [userID, setUserID] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [visits, getVisits] = useState(0);

  useEffect(() => {
    getTodayLogs();
  }, [userID]);

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;

    // Tell that input field only accept numbers
    if (value === '' || regex.test(value)) {
      setUserID(value);
    }

    // Enable button on 15th numbers
    if (value.length >= 15) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  const getTodayLogs = async () => {
    await fetch(`https://discord-lookup-api.herokuapp.com/api/logs/today`)
        .then((response) => response.json())
        .then((response) => {

          const data = response.data;

          getVisits(data.count);

        })
        .catch((error) => {
          console.error(error);
        });
  }

  const handleClick = () => {
    fetchUser();
  }

  const fetchUser = async () => {
    setIsReady(false);
    setIsLoading(true);
    setIsError(false);
    setIsDisabled(true);

    await fetch(`https://discord-lookup-api.herokuapp.com/api/user/profile?q=${userID}`)
    .then((response) => response.json())
    .then((response) => {

      const data = response.data;

      // On error
      if (!response.success) {
        setDiscordUser(data);
        setIsLoading(false);
        setIsError(true);
        // Reset form
        setUserID('');
        return;
      }

      // On success
      setDiscordUser(data);
      setIsReady(true);
      setIsLoading(false);
      // Reset form
      setUserID('');
    })
    .catch((error) => {
      setIsLoading(false);
      setIsError(true);
      // Reset form
      setUserID('');
    });
  }

  return (
    <>
      <Background/>
      <section className={isError || isReady ? 'mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-4xl lg:px-8 pb-8 sm:pb-16' : 'h-screen mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-4xl lg:px-8 pb-8 sm:pb-16'}>
        <Form handleChange={handleChange} userID={userID} handleClick={handleClick} isDisabled={isDisabled} isLoading={isLoading} />
        {isError &&
        <>
          <h2 className='text-center p-4 font-lg font-bold text-red-600'>User not found</h2>
          <div className='flex justify-center w-full mt-4 font-lg text-white'>
            <div className='bg-grey p-4 shadow-lg rounded-xl'>
              <p>
                <span className='mr-2'>
                  <FontAwesomeIcon icon={faHashtag} />
                </span>
                <strong>User ID: </strong>
                <span className='text-pink'>{discordUser.id}</span>
              </p>
              <p>
                <span className='mr-2'>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <strong>Created: </strong>
                <span className='text-lightgreen'>{discordUser.created}</span>
              </p>
            </div>
          </div>
        </>
        }
        {isReady &&
        <div className="block sm:flex justify-center w-full mt-4 font-lg text-white">
          {discordUser.avatar &&
            <div className='sm:w-1/3 bg-grey p-4 shadow-lg rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl'>
              <a href={`${discordUser.avatar}?size=1024`} target="_blank" rel="noopener noreferrer">
                <img className='mx-auto rounded-full transition-all hover:opacity-60' src={discordUser.avatar} alt={`${discordUser.username} avatar`} />
              </a>
            </div>
          }
          <div className='sm:w-full bg-grey p-4 shadow-lg rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl'>
            {discordUser.banner &&
              <a href={`${discordUser.banner}?size=1024`} target="_blank" rel="noopener noreferrer">
                <img className='mb-4 w-full rounded-lg transition-all hover:opacity-60' src={`${discordUser.banner}?size=1024`} alt={`${discordUser.username} banner`} />
              </a>
            }
            <p className='my-2'>
              <span className='mr-2'>
                <FontAwesomeIcon icon={faHashtag} />
              </span>
              <strong>User ID: </strong>
              <span className='text-pink'>{discordUser.id}</span>
            </p>
            <p className='my-2'>
              <span className='mr-2'>
                <FontAwesomeIcon icon={faIdBadge} />
              </span>
              <strong>Username: </strong>
              <span className='text-lightblue'>{discordUser.username}</span>
            </p>
            {discordUser.badges.length !== 0 &&
              <p className='my-2'>
                <span className='mr-2'>
                  <FontAwesomeIcon icon={faTags} />
                </span>
                <strong>Badge: </strong>
                {discordUser.badges.map((badge, key) => {
                  return <span key={key} className='inline-block w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url("/img/badges/${badge}.svg")`}}></span>
                })}
              </p>
            }
            <p className='my-2'>
              <span className='mr-2'>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <strong>Created: </strong>
              <span className='text-lightgreen'>{discordUser.created}</span>
            </p>
            {discordUser.bannerColor &&
              <p className='my-2'>
                <span className='mr-2'>
                  <FontAwesomeIcon icon={faPalette} />
                </span>
                <strong>Banner Color: </strong>
                <span style={{color: discordUser.bannerColor}}>{discordUser.bannerColor}</span>
              </p>
            }
          </div>
        </div>
        }
      </section>
      <AppFooter visits={visits} />
    </>
  )
}

export default App
