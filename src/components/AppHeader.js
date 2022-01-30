import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function AppHeader() {
    return (
        <header className="header">
            <h1 className="header__title">
                <FontAwesomeIcon className="header__icon" icon={faSearch} />
                Discord Lookup
            </h1>
        </header>
    )
}
