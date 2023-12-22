import React, { useState } from 'react';
import Api from '../services/api';
import * as gtag from '../utils/gtag';
import loadable from '@loadable/component';
import { localstorage } from "../utils/localstorage";

export default function Homepage() {
    const { getItem, setItem } = localstorage();

    const recentSearches = new Set(getItem('DiscordNameHistory') || []);

    const [defaultValue, setDefaultValue] = useState('');
    const [data, setData] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const searchUserById = async (userId) => {
        gtag.event('set_search', 'search', 'search', userId);

        setDefaultValue(userId);
        setData([]);

        setIsSuccess(false);
        setIsError(false);
        setIsLoading(true);

        try {
            const response = await Api.getUserById(userId);
            const data = response.data;

            for (const recentSearch of recentSearches) {
                if (recentSearch.id === data.id) {
                    recentSearches.delete(recentSearch);
                    break;
                }
            }
            recentSearches.add(data);
            setItem('DiscordNameHistory', [...recentSearches]);
    
            setData(data);

            setIsSuccess(true);
            setIsLoading(false);
        } catch (error) {
            recentSearches.add({ id: userId });
            setItem('DiscordNameHistory', [...recentSearches]);

            setData(error.response.data);

            setIsError(true);
            setIsLoading(false);
        }
    }

    const Form = loadable(() => import('../components/Form'));
    const Card = loadable(() => import('../components/Card'));
    const RecentSearch = loadable(() => import('../components/RecentSearch'));

    return (
        <main>
            <Form searchUserById={searchUserById} isLoading={isLoading} defaultValue={defaultValue} />
            
            {(isSuccess || isError) ? (
                <Card isSuccess={isSuccess} isError={isError} data={data} />
                ) : (
                <RecentSearch searchUserById={searchUserById} />
            )}
        </main>
    )
}
