import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import * as gtag from '../utils/gtag';
import '../styles/custom.css';

export default function Form({ fetchUserFromApi }) {

    const { t } = useTranslation();

    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const [isOnlyNumbers, setIsOnlyNumbers] = useState(false);
    const [isIdLength, setIsIdLength] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        setDebounceTimeout(setTimeout(() => {
            const regex = /^[0-9\b]+$/;
            if (!regex.test(value)) {
                const newValue = value.split('').filter(char => regex.test(char)).join('');
                setInputValue(newValue);
                setIsOnlyNumbers(true);
            } else {
                setIsOnlyNumbers(false);
            }
        }, 100)); 

        if (value.length >= 15 && value.length <= 22) {
            setIsIdLength(false);
            setIsDisabled(false);
        } else {
            setIsIdLength(true);
            setIsDisabled(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        gtag.event('submit', 'form_submit', 'form_submit', 1);

        setIsLoading(true);
        setIsDisabled(true);

        fetchUserFromApi(inputValue).then(() => {
            setIsLoading(false);
            setInputValue('');
        });
    }

    useEffect(() => {
        return () => {
            // Clear the timeout when the component is unmounted
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
        };
    }, [debounceTimeout]);

    return (
        <div className="mx-auto mb-4">
            <div className="rounded-lg p-4 overflow-hidden shadow bg-white">
                {/* FORM */}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className='relative'>
                        <label className='text-sm font-medium' htmlFor="user-id">
                            {t('form.input.label')}
                        </label>
                        <a
                            onClick={gtag.event('click', 'link_learn_more', 'link_learn_more', 1)}
                            className='ml-2'
                            href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t('learnmore.description')}
                        >
                            <FontAwesomeIcon className='text-blurple' icon={faCircleInfo} />
                        </a>
                        <div className='mt-2'>
                            <input
                                id="user-id"
                                type="text"
                                className="placeholder:text-xs transition-all block w-full border rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blurple"
                                placeholder={t('form.input.placeholder')}
                                onChange={handleChange}
                                value={inputValue}
                            />
                        </div>
                        {(isOnlyNumbers || isIdLength) &&
                            <div className="mt-2 text-red-500 text-xs">
                                {isOnlyNumbers && 
                                    <>
                                        <span>{t("form.error_message.only_numbers")}</span>
                                        <br />
                                    </>
                                }
                                {isIdLength && 
                                    <>
                                        <span>{t("form.error_message.id_length").replace("{{LENGTH}}", inputValue.length < 15 ? 15 : inputValue > 22 ? 22 : 22)}</span>
                                        <br />
                                    </>
                                }
                            </div>
                        }
                    </div>
                    <div className="mt-2">
                        <button
                            type="submit"
                            className="block h-full w-full rounded-md border border-transparent px-5 py-2 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10 transition-all disabled:opacity-60 font-bold cursor-pointer"
                            disabled={isDisabled}
                            aria-label={t('form.button.label')}
                        >
                            {isLoading ? (
                                <div className="dot-pulse">
                                    <div className="dot-pulse__dot"/>
                                </div>
                                ) : (
                                    <span className='font-bold'>{t('form.button.label')}</span>
                                )
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
