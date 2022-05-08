import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as gtag from '../utils/gtag';
import ReactCountryFlag from "react-country-flag";
import Api from "../services/api";

export default function AppFooter() {

    const { t, i18n } = useTranslation();

    const [lookupsCount, setLookupsCount] = useState(0);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleLanguageChange = (lng) => {
        switch (lng) {
            case 'fr':
                changeLanguage('fr');
                gtag.event('language', 'lang_fr', 'lang_fr', 1);
                break;
            case 'en':
                changeLanguage('en');
                gtag.event('language', 'lang_en', 'lang_en', 1);
                break;
            case 'de':
                changeLanguage('de');
                gtag.event('language', 'lang_de', 'lang_de', 1);
                break;
            case 'it':
                changeLanguage('it');
                gtag.event('language', 'lang_it', 'lang_it', 1);
                break;
            default:
                changeLanguage('en');
                gtag.event('language', 'lang_en', 'lang_en', 1);
                break;
        }
    }

    useEffect(() => {
        // Get today's logs
        Api.getTodayLogs().then(data => {
            setLookupsCount(data);
        });
    }, []);

    return (
        <footer className="text-lightgrey">
            {/* LANGUAGE SELECTION */}
            <div className="bg-white rounded-md text-center mt-6">
                <span>{t('footer.language')}</span>
                <div className="block">
                    <span className='mx-1'>
                        <button className={i18n.language === 'en' ? 'bg-[#f3f4f6] rounded-md p-1' : 'p-1 mb-2'} onClick={() => handleLanguageChange('en')}>
                            <ReactCountryFlag style={{ "display": "block", "margin": "0 auto", "height": "1.2rem", "fontSize": "1.6rem", "borderRadius": ".2rem" }} countryCode="GB" aria-label="Great Britain" title="Great Britain" svg />
                        </button>
                    </span>
                    <span className='mx-1'>
                        <button className={i18n.language === 'fr' ? 'bg-[#f3f4f6] rounded-md p-1' : 'p-1 mb-2'}  onClick={() => handleLanguageChange('fr')}>
                            <ReactCountryFlag style={{ "display": "block", "margin": "0 auto", "height": "1.2rem", "fontSize": "1.6rem", "borderRadius": ".2rem" }} countryCode="FR" aria-label="France" title="France" svg />
                        </button>
                    </span>
                    <span className='mx-1'>
                        <button className={i18n.language === 'de' ? 'bg-[#f3f4f6] rounded-md p-1' : 'p-1 mb-2'}  onClick={() => handleLanguageChange('de')}>
                            <ReactCountryFlag style={{ "display": "block", "margin": "0 auto", "height": "1.2rem", "fontSize": "1.6rem", "borderRadius": ".2rem" }} countryCode="DE" aria-label="Germany" title="Germany" svg />
                        </button>
                    </span>
                    <span className='mx-1'>
                        <button className={i18n.language === 'it' ? 'bg-[#f3f4f6] rounded-md p-1' : 'p-1 mb-2'}  onClick={() => handleLanguageChange('it')}>
                            <ReactCountryFlag style={{ "display": "block", "margin": "0 auto", "height": "1.2rem", "fontSize": "1.6rem", "borderRadius": ".2rem" }} countryCode="IT" aria-label="Italy" title="Italy" svg />
                        </button>
                    </span>
                </div>
            </div>
            <div className="py-6">
                <div className="text-center leading-12 text-sm">
                    <a
                        onClick={() => gtag.event('click', 'link_author', 'link_author', 1)}
                        className='text-blue-600 font-semibold transition-all pl-0 hover:text-blue-600/50 pl-1'
                        href='https://discord.com/users/265896171384340480'
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Lulu 🍉#6969"
                    >
                            Lulu 🍉#6969
                    </a>
                    <span className='mx-1'>-</span>
                    <span>
                        <span className="text-gray-800">{t('footer.affiliated')}</span>
                        <a
                            onClick={() => gtag.event('click', 'link_affiliation', 'link_affiliation', 1)}
                            className='text-blue-600 font-semibold transition-all pl-0 hover:text-blue-600/50 pl-1'
                            href="https://discord.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Discord Inc"
                        >
                                Discord Inc.
                        </a>
                    </span>
                    <div className='flex items-center'>
                        <div className='px-4 py-2 rounded-full bg-gradient-to-r from-blurple to-fuschia shadow-md overflow-hidden mt-4 mx-auto'>
                            <span className='text-white text-center font-bold'>{t('footer.stats')} : {lookupsCount ? lookupsCount : '-'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
