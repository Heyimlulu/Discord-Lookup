import React from 'react';
import { useTranslation } from 'react-i18next';
import * as gtag from '../utils/gtag';
import ReactCountryFlag from "react-country-flag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function AppFooter() {

    const { t, i18n } = useTranslation();

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

    return (
        <footer className="mt-auto text-lightgrey">
            {/* LANGUAGE SELECTION */}
            <div className="bg-white rounded-md text-center mt-6">
                <p>{t('footer.language')}</p>
                <div className="block">
                    <span className='mx-1'>
                        <button className={i18n.language === 'en' ? 'bg-neutral-200 rounded-md p-1.5 ' : 'p-1.5 mb-2'} onClick={() => handleLanguageChange('en')}>
                            <ReactCountryFlag style={{ "display": "block", "margin": "0 auto", "height": "1.2rem", "fontSize": "1.6rem", "borderRadius": ".2rem" }} countryCode="GB" aria-label="Great Britain" title="Great Britain" svg />
                        </button>
                    </span>
                    <span className='mx-1'>
                        <button className={i18n.language === 'fr' ? 'bg-neutral-200 rounded-md p-1.5 ' : 'p-1.5 mb-2'}  onClick={() => handleLanguageChange('fr')}>
                            <ReactCountryFlag style={{ "display": "block", "margin": "0 auto", "height": "1.2rem", "fontSize": "1.6rem", "borderRadius": ".2rem" }} countryCode="FR" aria-label="France" title="France" svg />
                        </button>
                    </span>
                    <span className='mx-1'>
                        <button className={i18n.language === 'de' ? 'bg-neutral-200 rounded-md p-1.5 ' : 'p-1.5 mb-2'}  onClick={() => handleLanguageChange('de')}>
                            <ReactCountryFlag style={{ "display": "block", "margin": "0 auto", "height": "1.2rem", "fontSize": "1.6rem", "borderRadius": ".2rem" }} countryCode="DE" aria-label="Germany" title="Germany" svg />
                        </button>
                    </span>
                    <span className='mx-1'>
                        <button className={i18n.language === 'it' ? 'bg-neutral-200 rounded-md p-1.5 ' : 'p-1.5 mb-2'}  onClick={() => handleLanguageChange('it')}>
                            <ReactCountryFlag style={{ "display": "block", "margin": "0 auto", "height": "1.2rem", "fontSize": "1.6rem", "borderRadius": ".2rem" }} countryCode="IT" aria-label="Italy" title="Italy" svg />
                        </button>
                    </span>
                </div>
            </div>
            <div className="py-6">
                <div className="text-gray-800 text-center leading-12 text-sm">
                    <span>Made with <FontAwesomeIcon className="text-red mx-[2px]" icon={faHeart} /> by</span>
                    <a
                        onClick={() => gtag.event('click', 'link_author', 'link_author', 1)}
                        className='text-blue-600 font-semibold transition-all pl-0 hover:text-blue-600/50 pl-1'
                        href='https://github.com/Heyimlulu'
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Lulu 🍉#6969"
                    >
                            Lulu
                    </a>
                    <span className='mx-1'>-</span>
                    <span>
                        <span>{t('footer.affiliated')}</span>
                    </span>
                </div>
            </div>
        </footer>
    )
}
