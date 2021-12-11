import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faIdBadge, faPalette, faStar, faTags } from '@fortawesome/free-solid-svg-icons';

// STYLES
import './App.css'

// COMPONENTS
import AppHeader from './components/AppHeader';

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

    if (value === '' || regex.test(value)) {
      setUserID(value);
    }

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

    await fetch(`https://discord-lookup-api.herokuapp.com/api/user/profile?q=${userID}`)
    .then((response) => response.json())
    .then((response) => {
      const data = response.data;

      if (!data) {
        setIsLoading(false);
        setIsError(true);
        return;
      }

      setDiscordUser(data);
      setIsReady(true);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      setIsError(true);
    });
  }

  return (
    <>
      <AppHeader />
      <div className="container">
        <div className="row">
          <div>
            <label htmlFor='userid-input' className="userid-label">User ID / Bot ID:</label>
            <input type="text" name="userid-input" id="userid-input" className="userid-input" maxLength={24} onChange={handleChange} value={userID} />
            <button id="btn" className="btn btn__info" onClick={handleClick} disabled={isDisabled}>Lookup</button>
          </div>
        </div>
        {isLoading && <h2 className='loading'>Loading...</h2>}
        {isError && <h2 className='error'>User not found</h2>}
        {isReady &&
        <div className="row content">
          <div className='col-1-of-2'>
            <a href={`${discordUser.avatar}?size=1024`} target="_blank" rel="noopener noreferrer">
              <img className='avatar' src={discordUser.avatar} alt={`${discordUser.username} avatar`} />
            </a>
          </div>
          <div className="col-1-of-2">
            {discordUser.banner &&
              <a href={`${discordUser.banner}?size=1024`} target="_blank" rel="noopener noreferrer">
                <img className='banner' src={discordUser.banner} alt={`${discordUser.username} banner`} />
              </a>
            }
            <p>
              <span className='icon'><FontAwesomeIcon icon={faHashtag} /></span>
              <strong>User ID: </strong>
              <span className='userid'>{discordUser.id}</span>
            </p>
            <p>
              <span className='icon'><FontAwesomeIcon icon={faIdBadge} /></span>
              <strong>Username: </strong>
              <span className='username'>{discordUser.username}</span>
            </p>
            {discordUser.badges.length !== 0 &&
              <p>
                <span className='icon'><FontAwesomeIcon icon={faTags} /></span>
                <strong>Badge: </strong>
                {discordUser.badges.map((badge, key) => {
                  return <span key={key}><img height="20" className='badge' src={`/img/badges/${badge}.svg`} alt={badge}/></span>
                })}
              </p>
            }
            <p>
              <span className='icon'><FontAwesomeIcon icon={faStar} /></span>
              <strong>Created: </strong>
              <span className='created'>{discordUser.creationDate}</span>
            </p>
            {discordUser.bannerColor &&
              <p>
                <span className='icon'><FontAwesomeIcon icon={faPalette} /></span>
                <strong>Banner Color: </strong>
                <span className='bannerColor' style={{color: discordUser.bannerColor}}>{discordUser.bannerColor}</span>
              </p>
            }
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default App
