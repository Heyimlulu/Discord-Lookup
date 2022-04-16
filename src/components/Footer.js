import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";
import FR from '../images/country/france.png';
import UK from '../images/country/united-kingdom.png';

export default function AppFooter({ visits }) {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <footer className="text-lightgrey">
            {/* LANGUAGE SELECTION */}
            <div className="bg-white rounded-2xl text-center mt-6">
                <span>{t('footer.language')}</span>
                <div>
                    <span className='mx-0.5'>
                        <button className={i18n.language === 'en' ? 'bg-[#f3f4f6] rounded-lg p-1 w-10' : 'p-1 w-10'} onClick={() => changeLanguage('en')}>
                            <img src={UK} alt="United Kingdom" />
                        </button>
                    </span>
                    <span className='mx-0.5'>
                        <button className={i18n.language === 'fr' ? 'bg-[#f3f4f6] rounded-lg p-1 w-10' : 'p-1 w-10'}  onClick={() => changeLanguage('fr')}>
                            <img src={FR} alt="France" />
                        </button>
                    </span>
                </div>
            </div>
            <div className="py-6">
                <div className="text-sm text-center leading-12 text-md">
                    <p>
                        <span>
                            <span>{t('footer.affiliated')}</span>
                            <a className='text-blurple font-semibold transition-all pl-0 hover:text-green pl-1' href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord Inc.</a>
                        </span>
                        <span>
                            <span className='pl-1'>{t('footer.stats')}:</span>
                            <span className="text-blurple font-semibold pl-1">{ visits }</span>    
                        </span> 
                    </p>
                    <p>
                        <span>{t('footer.contact')}</span>
                        <a className='text-blurple font-semibold transition-all pl-0 hover:text-green pl-1' href='https://discord.com/users/265896171384340480' target="_blank" rel="noopener noreferrer">Lulu 🍉#6969</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
