import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const { useTranslation } = require('react-i18next');

export default function Header() {

    const { t } = useTranslation();

    return (
        <header className="mt-4 mb-6 text-center">
            <h2 className="font-extrabold text-blurple text-[2.5rem] lg:text-[3rem] 2xl:text-[3.5rem] sm:tracking-tight">
                <FontAwesomeIcon className="mr-4" icon={faSearch} />
                Discord Lookup
            </h2>
            <p className="max-w-xl mx-auto text-md lg:text-lg text-gray-800">{t('header.description')}</p>
        </header>
    )
}
