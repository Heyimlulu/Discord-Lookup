import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faIdBadge, faPalette, faStar, faTags } from '@fortawesome/free-solid-svg-icons';

// STYLES
import './App.css'
import './background.css'

// COMPONENTS
import AppHeader from './components/AppHeader';
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
      <AppHeader />
      <Background />
      <div className="container">
        <Form handleChange={handleChange} userID={userID} handleClick={handleClick} isDisabled={isDisabled} isLoading={isLoading} />
        {isError && 
        <>
          <h2 className='error'>User not found</h2>
          <div className='row content'>
            <div className='col single'>
              <p>
                <span className='icon'>
                  <FontAwesomeIcon icon={faHashtag} />
                </span>
                <strong>User ID: </strong>
                <span className='userid'>{discordUser.id}</span>
              </p>
              <p>
                <span className='icon'>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <strong>Created: </strong>
                <span className='created'>{discordUser.created}</span>
              </p>
            </div>
          </div>
        </>
        }
        {isReady &&
        <div className="row content">
          {discordUser.avatar &&
            <div className='col col-1'>
              <a href={`${discordUser.avatar}?size=1024`} target="_blank" rel="noopener noreferrer">
                <img className='avatar' src={discordUser.avatar} alt={`${discordUser.username} avatar`} />
              </a>
            </div>
          }
          <div className='col col-2'>
            {discordUser.banner &&
              <a href={`${discordUser.banner}?size=1024`} target="_blank" rel="noopener noreferrer">
                <img className='banner' src={`${discordUser.banner}?size=1024`} alt={`${discordUser.username} banner`} />
              </a>
            }
            <p>
              <span className='icon'>
                <FontAwesomeIcon icon={faHashtag} />
              </span>
              <strong>User ID: </strong>
              <span className='userid'>{discordUser.id}</span>
            </p>
            <p>
              <span className='icon'>
                <FontAwesomeIcon icon={faIdBadge} />
              </span>
              <strong>Username: </strong>
              <span className='username'>{discordUser.username}</span>
            </p>
            {discordUser.badges.length !== 0 &&
              <p>
                <span className='icon'>
                  <FontAwesomeIcon icon={faTags} />
                </span>
                <strong>Badge: </strong>
                {discordUser.badges.map((badge, key) => {
                  return <span key={key} className='badge' style={{backgroundImage: `url("/img/badges/${badge}.svg")`}}></span>
                })}
              </p>
            }
            <p>
              <span className='icon'>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <strong>Created: </strong>
              <span className='created'>{discordUser.created}</span>
            </p>
            {discordUser.bannerColor &&
              <p>
                <span className='icon'>
                  <FontAwesomeIcon icon={faPalette} />
                </span>
                <strong>Banner Color: </strong>
                <span className='bannerColor' style={{color: discordUser.bannerColor}}>{discordUser.bannerColor}</span>
              </p>
            }
          </div>
        </div>
        }
      </div>
      <AppFooter />
    </>
  )
}

export default App
