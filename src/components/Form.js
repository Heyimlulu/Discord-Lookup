import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import * as gtag from '../utils/gtag';
import '../styles/custom.css';

export default function Form({ retrieveUser }) {

    const { t } = useTranslation();

    const [isDisabled, setIsDisabled] = useState(true);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        const regex = /^[0-9\b]+$/;

        // Tell that input field only accept numbers
        if (value === '' || regex.test(value)) {
            setUserInput(value);
        }

        // Enable button on 15th numbers
        if (value.length >= 15) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetchUser();
    }

    const handleKeyUp = async (e) => {
        const value = e.target.value;

        if (e.key === "Enter" && value.length >= 15) {
            await fetchUser();
        }
    }

    const handleClick = async () => {
        await fetchUser();
    }

    const fetchUser = async () => {
        gtag.event('submit', 'btn_submit', 'btn_submit', 1);

        setIsLoading(true);
        setIsDisabled(true);

        await retrieveUser(userInput).then(() => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
            setUserInput('');
        });
    }

    return (
        <div className="mx-auto">
            <div className="relative rounded-md px-6 py-8 overflow-hidden bg-white">
                {/* FORM */}
                <form onKeyUp={handleKeyUp} onSubmit={handleSubmit} className="sm:inline-flex w-full">
                    {/* HELP / LEARN MORE BUTTON */}
                    <div className="absolute top-1">
                        <a
                            onClick={gtag.event('click', 'link_learn_more', 'link_learn_more', 1)}
                            className='px-2 py-0.5 bg-blurple text-white text-xs font-bold hover:bg-indigo-400 transition-all rounded-xl'
                            href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t('learnmore.description')}
                        >
                            {t('learnmore.description')}
                        </a>
                    </div>
                    {/* INPUT TEXT */}
                    <div className="flex-1">
                        <label htmlFor="cta-id" className="sr-only">
                            {t('form.input.label')}
                        </label>
                        <input
                            id="cta-id"
                            type="text"
                            className="placeholder:text-xs transition-all block w-full border rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blurple"
                            placeholder={t('form.input.placeholder')}
                            maxLength={22}
                            onChange={handleChange}
                            value={userInput}
                        />
                    </div>
                    {/* SUBMIT BUTTON */}
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                        <button
                            type="submit"
                            className="block h-full w-full rounded-md border border-transparent px-5 py-2 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10 transition-all disabled:opacity-60 font-bold cursor-pointer"
                            onClick={handleClick}
                            disabled={isDisabled}
                            aria-label={t('form.button.label')}
                        >
                            {isLoading ?
                                <div className="dot-pulse">
                                    <div className="dot-pulse__dot"></div>
                                </div>
                                :
                                <span className='font-bold'>{t('form.button.label')}</span>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
