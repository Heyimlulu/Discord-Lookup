import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const { useTranslation } = require('react-i18next');

export default function Header() {

    const { t } = useTranslation();

    return (
        <header className="py-16">
            <div className="text-center">
                <h2 className="mt-1 font-extrabold text-blurple text-3xl lg:text-4xl 2xl:text-5xl sm:tracking-tight">
                    <FontAwesomeIcon className="mr-4" icon={faSearch} />
                    Discord Lookup
                </h2>
                <p className="max-w-xl mt-5 mx-auto text-md lg:text-lg text-gray-800">{t('header.description')}</p>
            </div>
        </header>
    )
}
