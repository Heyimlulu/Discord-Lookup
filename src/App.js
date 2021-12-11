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

  const handleChange = (e) => {
    const value = e.target.value;

    setUserID(value);
  }

  const handleClick = () => {
    DiscordService.getUser(userID).then((user) => {
      if (user) {
        setDiscordUser(user);
        setIsReady(true);
      } else {
        console.log('User not found');
      }
    });
  }

  return (
    <>
      <AppHeader />
      <div className="container">
        <h3 className="title">User ID / Bot ID:</h3>
        <div className="form">
          <input type="text" name="input" id="input" className="input" placeholder="1234567890" onChange={handleChange} value={userID} />
          <button id="btn" className="btn btn__info" onClick={handleClick}>Lookup</button>
        </div>
      </div>
      <div className='content'>
      {isReady &&
        <div className="row">
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
            <span>{discordUser.id}</span>
          </p>
          <p>
            <strong>Username: </strong>
            <span>{discordUser.username}</span>
          </p>
          {discordUser.badges.length !== 0 &&
            <p>
              <strong>Badge: </strong>
              {discordUser.badges.map((badge, key) => {
                return <span key={key}><img className='badge' src={`/img/flags/${badge}.svg`} alt={badge}/></span>
              })}
            </p>
          }
          <p>
            <strong>Created: </strong>
            <span>{discordUser.creationDate}</span>
          </p>
          <p>
            <strong>Banner Color: </strong>
            <span style={{color: discordUser.bannerColor}}>{discordUser.bannerColor}</span>
          </p>
        </div>
      </div>
      }
      </div>
    </>
  )
}

export default App
