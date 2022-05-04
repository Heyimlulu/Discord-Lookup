import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faStar } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import defaultAvatar from '../images/defaultAvatar.png';

export default function Result({ isSuccess, isError, userInfos }) {

    const { t } = useTranslation();

    return (
        <div>
            {/* USER NOT FOUND */}
            {isError &&
            <div className="bg-white shadow rounded-md mt-4">
                {/* BANNER COLOR */}
                <div className="border-b rounded-t-md w-full min-h-[60px] bg-[#262626]"></div>
                {/* USERS */}
                <div className="flex items-center py-3 px-4 border-b">
                    {/* AVATAR */}
                    <div className="group flex-none mr-1.5 rounded-full bg-gray-100 overflow-hidden relative w-[4.3rem] h-[4.3rem]">
                        <img src={defaultAvatar} alt="default discord avatar" className="h-full w-full object-cover object-center relative z-20"/>
                    </div>
                    {/* INFOS */}
                    <div className="flex flex-col">
                        {/* USERNAME AND DISCRIMINATOR */}
                        <div className="inline-block w-[fit-content] text-xl font-semibold px-1.5 ml-1">
                            {t('response.error')}
                        </div>
                    </div>
                </div>
                {/* OTHERS INFOS */}
                <div className="grid sm:grid-cols-2 auto-rows-auto py-3 px-4 gap-3">
                    {/* CREATED DATE */}
                    <div>
                        <div className="flex">
                            <FontAwesomeIcon className="mr-2" icon={faPalette}/>
                            <p className="text-sm font-medium text-gray-900">{t("result.created")}</p>
                        </div>
                        <p className="text-sm text-gray-500">{userInfos.created}</p>
                    </div>
                </div>
            </div>
            }
            {/* USER FOUND */}
            {isSuccess &&
                <div className="bg-white shadow rounded-md mt-4">
                    {/* BANNER */}
                    {userInfos.bannerColor &&
                        <div className="border-b rounded-t-md w-full min-h-[60px]" style={{backgroundColor: userInfos.bannerColor}}>
                            {userInfos.banner &&
                                <a className="group flex relative w-full h-[120px]" target="_blank" rel="noopener noreferrer" href={`${userInfos.banner}?size=1024`}>
                                    <div className="absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-all flex items-center justify-center duration-200 z-30">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                        </svg>
                                    </div>
                                    {userInfos.banner &&
                                        <img className="h-full w-full object-cover object-center rounded-t-md relative z-20" src={`${userInfos.banner}?size=1024`} alt={userInfos.username}/>
                                    }
                                </a>
                            }
                        </div>
                    }
                    {/* USERS */}
                    <div className="flex items-center py-3 px-4 border-b">
                        {/* AVATAR */}
                        <a href={`${userInfos.avatar}?size=1024`} target="_blank" rel="noopener noreferrer" className="group flex-none mr-1.5 rounded-full bg-gray-100 overflow-hidden relative w-[4.3rem] h-[4.3rem]">
                            <div class="absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-all flex items-center justify-center duration-200 z-30">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                            {userInfos.avatar &&
                                <img src={userInfos.avatar} alt={userInfos.username} className="h-full w-full object-cover object-center relative z-20" />
                            }
                            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center duration-200 z-10">
                                <svg className="fill-current text-gray-300" width="28" height="20" viewBox="0 0 28 20">
                                    <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path>
                                </svg>
                            </div>
                        </a>
                        {/* INFOS */}
                        <div className="flex flex-col">
                            {/* USERNAME AND DISCRIMINATOR */}
                            <div className="inline-block w-[fit-content] text-xl font-semibold hover:bg-gray-100 px-1.5 ml-1 rounded-md transition-colors cursor-pointer">
                                <a href={ "https://discord.com/users/" + userInfos.id } target="_blank" rel="noopener noreferrer">
                                    { userInfos.username.split('#')[0] }
                                    <small className="font-normal text-md font-mono ml-[1px]">#{ userInfos.username.split('#')[1] }</small>
                                </a>
                            </div>
                            {/* BADGES */}
                            <div className="flex items-center px-2 mt-[1px] select-none">
                                    {userInfos.badges.map((badge, key) => {
                                        return (
                                            <div className="h-[30px] p-[4px] mr-[1px] cursor-pointer">
                                                <img key={key} src={`./assets/badges/SVG/${badge}.svg`} alt="flag" className="w-full h-full object-contain" />
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                    {/* OTHERS INFOS */}
                    <div className="grid sm:grid-cols-2 auto-rows-auto py-3 px-4 gap-3">
                        {/* CREATED DATE */}
                        <div>
                            <div className="flex">
                                <FontAwesomeIcon className="mr-2" icon={faPalette} />
                                <p className="text-sm font-medium text-gray-900">{ t("result.created") }</p>
                            </div>
                            <p className="text-sm text-gray-500">{ userInfos.created }</p>
                        </div>
                        {/* BANNER COLOR */}
                        <div>
                            <div className="flex">
                                <FontAwesomeIcon className="mr-2" icon={faStar} />
                                <p className="text-sm font-medium text-gray-900">{ t("result.bannerColor") }</p>
                            </div>
                            <p className="text-sm text-gray-500">{ userInfos.bannerColor }</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
