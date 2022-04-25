import React from 'react';
import { useTranslation } from 'react-i18next';
import FR from '../images/country/france.png';
import UK from '../images/country/united-kingdom.png';
import * as gtag from '../utils/gtag';

export default function AppFooter({ lookupsCount }) {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleLanguageChange = (lng) => {
        switch (lng) {
            case 'fr':
                changeLanguage('fr');
                gtag.event('language', 'language_fr', 'language_fr', 1);
                break;
            case 'en':
                changeLanguage('en');
                gtag.event('language', 'language_en', 'language_en', 1);
                break;
            default:
                changeLanguage('en');
                gtag.event('language', 'language_en', 'language_en', 1);
                break;
        }
    }

    return (
        <footer className="text-lightgrey">
            {/* LANGUAGE SELECTION */}
            <div className="bg-white rounded-2xl text-center mt-6">
                <span>{t('footer.language')}</span>
                <div>
                    <span className='mx-0.5'>
                        <button className={i18n.language === 'en' ? 'bg-[#f3f4f6] rounded-lg p-1 w-10' : 'p-1 w-10'} onClick={() => handleLanguageChange('en')}>
                            <img src={UK} alt="United Kingdom" />
                        </button>
                    </span>
                    <span className='mx-0.5'>
                        <button className={i18n.language === 'fr' ? 'bg-[#f3f4f6] rounded-lg p-1 w-10' : 'p-1 w-10'}  onClick={() => handleLanguageChange('fr')}>
                            <img src={FR} alt="France" />
                        </button>
                    </span>
                </div>
            </div>
            <div className="py-6">
                <div className="text-sm text-center leading-12 text-md">
                    <a 
                        onClick={() => gtag.event('link', 'author', 'author', 1)} 
                        className='text-blurple font-semibold transition-all pl-0 hover:text-green pl-1' 
                        href='https://discord.com/users/265896171384340480'
                        target="_blank" 
                        rel="noopener noreferrer">
                            Lulu 🍉#6969
                    </a>
                    <span className='mx-1'>-</span>
                    <span>
                        <span>{t('footer.affiliated')}</span>
                        <a 
                            onClick={() => gtag.event('link', 'affiliation', 'affiliation', 1)} 
                            className='text-blurple font-semibold transition-all pl-0 hover:text-green pl-1' 
                            href="https://discord.com" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                Discord Inc.
                        </a>
                    </span>
                    {/* <div className='mt-2'>
                        <span className='pl-1'>{t('footer.stats')}:</span>
                        <span className="text-blurple font-semibold pl-1">{lookupsCount ? lookupsCount : '-'}</span>    
                    </div>  */}
                </div>
            </div>
        </footer>
    )
}
