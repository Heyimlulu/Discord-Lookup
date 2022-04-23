import React from 'react'
import { useTranslation } from 'react-i18next';
import { DotPulse } from '@uiball/loaders'
import * as gtag from '../utils/gtag';

export default function Form({handleChange, handleKeyUp, handleSubmit, userInput, handleClick, isDisabled, isLoading}) {

    const { t } = useTranslation();

    return (
        <div className="mx-auto">
            <div className="relative rounded-2xl px-6 py-8 overflow-hidden bg-white">
                {/* FORM */}
                <form onKeyUp={handleKeyUp} onSubmit={handleSubmit} className="sm:inline-flex w-full">
                    {/* HELP / LEARN MORE BUTTON */}
                    <div className="absolute top-1">
                        <a onClick={gtag.event('help', 'learn_more', 'learn_more', 1)} className='px-2 py-0.5 bg-blurple text-white text-xs font-bold hover:bg-green transition-all rounded-xl' href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-" target="_blank" rel="noopener noreferrer">
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
                            className="block h-full w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10 transition-all disabled:opacity-60 font-bold cursor-pointer"
                            onClick={handleClick}
                            disabled={isDisabled}
                        >
                            {isLoading ? <DotPulse size={25} color="#FFF" /> : <span className='font-bold'>{t('form.button.label')}</span>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
