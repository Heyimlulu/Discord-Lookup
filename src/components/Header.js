import React from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";
import * as gtag from '../utils/gtag';

export default function Header() {

    const { i18n } = useTranslation();

    const languageOptions = [
        { value: 'en', label: <ReactCountryFlag countryCode="GB" svg style={{ width: '2em', height: '1em' }} />, title: 'English' },
        { value: 'de', label: <ReactCountryFlag countryCode="DE" svg style={{ width: '2em', height: '1em' }} />, title: 'Deutsch' },
        { value: 'it', label: <ReactCountryFlag countryCode="IT" svg style={{ width: '2em', height: '1em' }} />, title: 'Italiano' },
        { value: 'fr', label: <ReactCountryFlag countryCode="FR" svg style={{ width: '2em', height: '1em' }} />, title: 'Français' },
        { value: 'jp', label: <ReactCountryFlag countryCode="JP" svg style={{ width: '2em', height: '1em' }} />, title: '日本語' },
    ];

    const handleLanguageChange = (lng) => {
        const language = lng.value;
        i18n.changeLanguage(language);
        gtag.event('language', `lang_${language}`, `lang_${language}`, 1);
    };

    return (
        <header className="flex justify-end items-center my-4 z-50">
            <Select
                options={languageOptions}
                onChange={handleLanguageChange}
                getOptionLabel={(option) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {option.label} <span style={{ marginLeft: 10 }}>{option.title}</span>
                    </div>
                )}
                value={languageOptions.find(option => option.value === i18n.language)}
            />
        </header>
    )
}
