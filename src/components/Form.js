import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import '../styles/three-dots.css';

export default function Form({handleChange, handleKeyUp, handleSubmit, userInput, handleClick, isDisabled, isLoading}) {
    return (
        <div className="mx-auto">
            <div className="relative rounded-2xl px-6 py-8 overflow-hidden bg-white">
                {/* HELP */}
                <div className="relative sm:mx-auto sm:max-w-xs">
                    <a className="absolute top-2 right-2 sm:right-24 xl:right-16 px-2 py-1.5" href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="transition-all text-blurple hover:text-opacity-80" icon={faQuestionCircle} />
                    </a>
                </div>
                {/* FORM */}
                <form onKeyUp={handleKeyUp} onSubmit={handleSubmit} className="sm:flex">
                    {/* INPUT TEXT */}
                    <div className="min-w-0 flex-1">
                        <label htmlFor="cta-id" className="sr-only">
                            User / Bot ID
                        </label>
                        <input
                            id="cta-id"
                            type="text"
                            className="transition-all block w-full border rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blurple"
                            placeholder="User ID / Bot ID"
                            maxLength={22}
                            onChange={handleChange}
                            value={userInput}
                        />
                    </div>
                    {/* SUBMIT BUTTON */}
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                        <button
                            type="submit"
                            className="block h-full w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10 transition-all disabled:opacity-60 font-bold cursor-pointer"
                            onClick={handleClick}
                            disabled={isDisabled}
                        >
                            {isLoading ? <div className="mx-auto my-2 sm:my-0 dot-flashing"></div> : <span>Lookup</span>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
