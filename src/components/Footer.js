import React from 'react';
import { useTranslation } from 'react-i18next';
import * as gtag from '../utils/gtag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function AppFooter() {

    const { t, } = useTranslation();

    return (
        <footer className="mt-auto text-lightgrey">
            <div className="py-6">
                <div className="text-gray-800 text-center leading-12 text-sm">
                    <span>Made with <FontAwesomeIcon className="text-red-500 mx-[2px]" icon={faHeart} /> by</span>
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
