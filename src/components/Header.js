import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="mt-1 text-4xl font-extrabold text-blurple sm:text-5xl sm:tracking-tight lg:text-6xl">
                    <FontAwesomeIcon className="mr-4" icon={faSearch} />
                    Discord Lookup
                </h2>
                <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Lookup for a Discord User or Bot ID.</p>
            </div>
        </div>
    )
}
