import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faIdBadge, faPalette, faStar, faTags } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function Card({ isSuccess, isError, userInfos }) {

    const { t } = useTranslation();

    return (
        <div>
            {/* USER NOT FOUND */}
            {isError &&
            <div className='block justify-center w-full mt-4 text-sm text-white'>
                <div className='bg-white text-gray-800 p-4 rounded-xl'>
                    <h2 className='text-center my-2 font-bold text-red-600 text-xl'>{t('response.userNotFound')}</h2>
                    {/* USER ID */}
                    <p>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faHashtag} />
                        </span>
                        <strong className='mr-1'>{t('card.userId')}:</strong>
                        <span className='font-bold text-fuschia'>{userInfos.id}</span>
                    </p>
                    {/* CREATION DATE */}
                    <p>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        <strong className='mr-1'>{t('card.created')}:</strong>
                        <span className='font-bold text-green'>{userInfos.created}</span>
                    </p>
                </div>
            </div>
            }
            {/* USER FOUND */}
            {isSuccess &&
            <div className="block sm:flex justify-center w-full mt-4 text-sm text-white">
                {/* LEFT SIDE */}
                {/* AVATAR */}
                {userInfos.avatar &&
                    <div className='sm:w-1/3 bg-white p-4 rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl'>
                        <a href={`${userInfos.avatar}?size=1024`} target="_blank" rel="noopener noreferrer">
                            <img className='mx-auto rounded-full transition-all hover:opacity-60' src={userInfos.avatar} alt={`${userInfos.username} avatar`} />
                        </a>
                    </div>
                }
                {/* RIGHT SIDE */}
                <div className={userInfos.avatar ? 'sm:w-full bg-white text-gray-800 p-4 rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl' : 'sm:w-full bg-white text-gray-800 p-4 rounded-xl'}>
                    {/* BANNER */}
                    {userInfos.banner &&
                        <a href={`${userInfos.banner}?size=1024`} target="_blank" rel="noopener noreferrer">
                            <img className='mb-4 w-full rounded-lg transition-all hover:opacity-60' src={`${userInfos.banner}?size=1024`} alt={`${userInfos.username} banner`} />
                        </a>
                    }
                    {/* USER ID */}
                    <p className='my-2'>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faHashtag} />
                        </span>
                        <strong className='mr-1'>{t('card.userId')}:</strong>
                        <span className='font-bold text-fuschia'>{userInfos.id}</span>
                    </p>
                    {/* USERNAME */}
                    <p className='my-2'>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faIdBadge} />
                        </span>
                        <strong className='mr-1'>{t('card.username')}:</strong>
                        <span className='font-bold text-lightblue'>{userInfos.username}</span>
                    </p>
                    {/* BADGES */}
                    {userInfos.badges.length !== 0 &&
                    <div className='my-2'>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faTags} />
                        </span>
                        <strong className='mr-1'>{t('card.badges')}:</strong>
                        <p className='inline-flex'>
                            {userInfos.badges.map((badge, key) => {
                                return (
                                    <span key={key} className='inline-flex text-3xl font-semibold text-gray-700 mr-2'>
                                        <img className='w-full h-5' src={`img/badges/${badge}.png`} alt={badge} />
                                    </span>
                                )
                            })}
                        </p>
                    </div>
                    }
                    {/* CREATION DATE */}
                    <p className='my-2'>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        <strong className='mr-1'>{t('card.created')}:</strong>
                        <span className='font-bold text-green'>{userInfos.created}</span>
                    </p>
                    {/* COLOR */}
                    {userInfos.bannerColor &&
                    <p className='my-2'>
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faPalette} />
                        </span>
                        <strong className='mr-1'>{t('card.bannerColor')}:</strong>
                        <span className='font-bold text-white rounded-xl px-2 py-0.5' style={{ backgroundColor: userInfos.bannerColor }}>{userInfos.bannerColor}</span>
                    </p>
                    }
                </div>
            </div>
            }
        </div>
    )
}
