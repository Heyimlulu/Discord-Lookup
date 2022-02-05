import React from 'react'
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuestionCircle, faSearch} from '@fortawesome/free-solid-svg-icons';

export default function Form({handleChange, userID, handleClick, isDisabled, isLoading}) {
    return (
        <div className="py-8 sm:py-16">
            <div className="mx-auto">
                <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                    <div className="relative">
                        <div className="sm:text-center">
                            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                                <FontAwesomeIcon className="mr-2" icon={faSearch} />
                                Discord Lookup
                            </h2>
                            <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
                                Lookup for a Discord User or Bot ID
                            </p>
                        </div>
                        <div className="relative sm:mx-auto sm:max-w-xs mt-4 -mb-6">
                            <a className="absolute top-4 right-2 sm:right-16 px-2 py-1.5" href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon color='#262626' icon={faQuestionCircle} />
                            </a>
                        </div>
                        <div className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                            <div className="min-w-0 flex-1">
                                <label htmlFor="cta-id" className="sr-only">
                                    User / Bot ID
                                </label>
                                <input
                                    id="cta-id"
                                    type="text"
                                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                    placeholder="User ID / Bot ID"
                                    maxLength={22}
                                    onChange={handleChange}
                                    value={userID}
                                />
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-3">
                                <button
                                    type="submit"
                                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10 transition-all disabled:opacity-60 cursor-pointer"
                                    onClick={handleClick}
                                    disabled={isDisabled}
                                >
                                    {isLoading ? <Loader type="ThreeDots" color="#FFFFFF" height={25} width={40} /> : <span>Lookup</span>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
