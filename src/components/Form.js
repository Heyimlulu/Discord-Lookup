import React from 'react'
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default function Form({handleChange, userID, handleClick, isDisabled, isLoading}) {
    return (
        <div className="row">
            <form>
                <div className="flex">
                    <label htmlFor='userid-input' className="userid-label">User ID / Bot ID:</label>
                    <a className="links" href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faQuestionCircle} />
                    </a>
                </div>
                <input type="text" name="userid-input" id="userid-input" className="userid-input" maxLength={22} onChange={handleChange} value={userID} />
                <button id="btn" className="btn btn__info" onClick={handleClick} disabled={isDisabled}>
                    {isLoading ? <Loader type="ThreeDots" color="#FFFFFF" height={10} width={40} /> : <span>Lookup <FontAwesomeIcon icon={faChevronCircleRight} /></span>}
                </button>
            </form>
        </div>
    )
}


// TUTORIAL ON HOW TO GET THE DISCORD ID: https://wiki.discord.id/obtain-ids/desktop
