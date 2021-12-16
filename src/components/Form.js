import React from 'react'
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function Form({handleChange, userID, handleClick, isDisabled, isLoading}) {
    return (
        <div className="row">
            <form>
                <label htmlFor='userid-input' className="userid-label">User ID / Bot ID:</label>
                <input type="text" name="userid-input" id="userid-input" className="userid-input" maxLength={22} onChange={handleChange} value={userID} />
                <button id="btn" className="btn btn__info" onClick={handleClick} disabled={isDisabled}>
                    {isLoading ? <Loader type="ThreeDots" color="#FFFFFF" height={10} width={40} /> : <span>Lookup <FontAwesomeIcon icon={faChevronCircleRight} /></span>}
                </button>
            </form>
        </div>
    )
}
