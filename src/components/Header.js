import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const { useTranslation } = require('react-i18next');

export default function Header() {

    const { t } = useTranslation();

    return (
        <header className="py-16">
            <div className="text-center">
                <h2 className="mt-1 text-4xl font-extrabold text-blurple sm:text-5xl sm:tracking-tight lg:text-6xl">
                    <FontAwesomeIcon className="mr-4" icon={faSearch} />
                    Discord Lookup
                </h2>
                <p className="max-w-xl mt-5 mx-auto text-xl text-gray-800">{t('header.description')}</p>
            </div>
        </header>
    )
}
