import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/NotFound/wutface.png';
import { useTranslation } from 'react-i18next';

function PageNotFound() {

    const { t } = useTranslation();

    return (
        <main className="container flex flex-col justify-center items-center mx-auto">
            <div className="w-full text-center">
                <h3 className="text-blurple text-lg mb-4">404 - Page Not Found</h3>
                <h1 className="mb-2 text-2xl font-bold text-[#262626] title-font md:text-4xl">{t('home.title')}</h1>
                <img className="w-36 mx-auto mb-12" src={img} alt="wutface emote" />
                <div className="flex justify-center">
                    <Link to="/">
                        <button className="duration-200 flex inline-flex items-center text-[#262626] hover:text-opacity-60 border-0 py-2 px-6 focus:outline-none rounded text-lg mr-4">
                            {t('home.backBtn')}
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 text-blurple" viewBox="0 0 20 22">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default PageNotFound
