import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faIdBadge, faPalette, faStar, faTags } from '@fortawesome/free-solid-svg-icons';

export default function Card({ isReady, isError, discordUser }) {
    return (
        <div>
            {/* USER NOT FOUND */}
            {isError &&
            <div className='flex justify-center w-full mt-4 font-lg text-white'>
                <div className='bg-white text-gray-800 p-4 rounded-xl'>
                    <h2 className='text-center my-2 font-bold text-red-600 text-xl'>User not found</h2>
                    {/* USER ID */}
                    <p>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faHashtag} />
                        </span>
                        <strong>User ID: </strong>
                        <span className='font-bold text-pink'>{discordUser.id}</span>
                    </p>
                    {/* CREATION DATE */}
                    <p>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        <strong>Created: </strong>
                        <span className='font-bold text-lightgreen'>{discordUser.created}</span>
                    </p>
                </div>
            </div>
            }
            {/* USER FOUND */}
            {isReady &&
            <div className="block sm:flex justify-center w-full mt-4 font-lg text-white">
                {/* LEFT SIDE */}
                {/* AVATAR */}
                {discordUser.avatar &&
                    <div className='sm:w-1/3 bg-white p-4 rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl'>
                        <a href={`${discordUser.avatar}?size=1024`} target="_blank" rel="noopener noreferrer">
                            <img className='mx-auto rounded-full transition-all hover:opacity-60' src={discordUser.avatar} alt={`${discordUser.username} avatar`} />
                        </a>
                    </div>
                }
                {/* RIGHT SIDE */}
                <div className='sm:w-full bg-white text-gray-800 p-4 rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl'>
                    {/* BANNER */}
                    {discordUser.banner &&
                        <a href={`${discordUser.banner}?size=1024`} target="_blank" rel="noopener noreferrer">
                            <img className='mb-4 w-full rounded-lg transition-all hover:opacity-60' src={`${discordUser.banner}?size=1024`} alt={`${discordUser.username} banner`} />
                        </a>
                    }
                    {/* USER ID */}
                    <p className='my-2'>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faHashtag} />
                        </span>
                        <strong>User ID: </strong>
                        <span className='font-bold text-pink'>{discordUser.id}</span>
                    </p>
                    {/* USERNAME */}
                    <p className='my-2'>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faIdBadge} />
                        </span>
                        <strong>Username: </strong>
                        <span className='font-bold text-lightblue'>{discordUser.username}</span>
                    </p>
                    {/* BADGES */}
                    {discordUser.badges.length !== 0 &&
                        <p className='my-2'>
                            <span className='mr-2'>
                                <FontAwesomeIcon icon={faTags} />
                            </span>
                            <strong>Badge: </strong>
                            <div className='inline-flex'>
                                {discordUser.badges.map((badge, key) => {
                                    return (
                                        <span key={key} className='inline-block bg-gray-200 rounded-full px-4 py-1.5 text-3xl font-semibold text-gray-700 mr-2'>
                                            <img className='inline-block w-8 h-8' src={`img/badges/${badge}.svg`} alt={badge} />
                                        </span>
                                    )
                                })}
                            </div>
                        </p>
                    }
                    {/* CREATION DATE */}
                    <p className='my-2'>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        <strong>Created: </strong>
                        <span className='font-bold text-lightgreen'>{discordUser.created}</span>
                    </p>
                    {/* COLOR */}
                    {discordUser.bannerColor &&
                    <p className='my-2'>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faPalette} />
                        </span>
                        <strong>Banner Color: </strong>
                        <span className='font-bold rounded-xl px-2 py-0.5' style={{color: discordUser.bannerColor, backgroundColor: discordUser.bannerColor}}>{discordUser.bannerColor}</span>
                    </p>
                    }
                </div>
            </div>
            }
        </div>
    )
}