import React, { useState } from 'react';
import './App.css'

// COMPONENTS
import AppHeader from './components/AppHeader';

// SERVICES
import DiscordService from './services/discord-service';

function App () {

  const [discordUser, setDiscordUser] = useState([]);
  const [userID, setUserID] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;

    if (value === '' || regex.test(value)) {
      setUserID(value);
    }
  }

  const handleClick = () => {
    if (userID) {
      DiscordService.getUser(userID).then((user) => {
        setDiscordUser(user);
        setIsReady(true);
      });
      setIsError(false);
    } else {
      setIsError(true);
    }
  }

  return (
    <>
      <AppHeader />
      <div className="container">
        <div className="row">
          <div>
            <label htmlFor='userid-input' className="userid-label">User ID / Bot ID:</label>
            <input type="text" name="userid-input" id="userid-input" className="userid-input" maxLength={24} onChange={handleChange} value={userID} />
            <button id="btn" className="btn btn__info" onClick={handleClick}>Lookup</button>
            {isError &&
              <span className='error'>User ID may not be empty</span>
            }
          </div>
        </div>
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
              <strong>User ID: </strong>
              <span className='userid'>{discordUser.id}</span>
            </p>
            <p>
              <strong>Username: </strong>
              <span className='username'>{discordUser.username}</span>
            </p>
            {discordUser.badges.length !== 0 &&
              <p>
                <strong>Badge: </strong>
                {discordUser.badges.map((badge, key) => {
                  return <span key={key}><img height="20" className='badge' src={`/img/badges/${badge}.svg`} alt={badge}/></span>
                })}
              </p>
            }
            <p>
              <strong>Created: </strong>
              <span className='created'>{discordUser.creationDate}</span>
            </p>
            {discordUser.bannerColor &&
              <p>
                <strong>Banner Color: </strong>
                <span className='bannerColor' style={{color: discordUser.bannerColor, backgroundColor: discordUser.bannerColor}}>{discordUser.bannerColor}</span>
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
