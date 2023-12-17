import React, { useState } from 'react';
import Api from '../services/api';
import * as gtag from '../utils/gtag';
import loadable from '@loadable/component';

export default function Homepage() {

    const [data, setData] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchDiscordUser = async (userId) => {
        gtag.event('set_search', 'search', 'search', userId);

        setIsSuccess(false);
        setIsError(false);

        try {
            const response = await Api.getUser(userId);

            const data = response.data;
            
            if (!response.success) {
                setData(response.message);
                setIsError(true);
                return;
            }
    
            setData(data);
            setIsSuccess(true);
        } catch (error) {
            console.error("error: ", error);
            setIsError(true);
        }
    }

    const Form = loadable(() => import('../components/Form'));
    const Card = loadable(() => import('../components/Card'));

    return (
        <main>
            <Form fetchDiscordUser={fetchDiscordUser} />
            <Card isSuccess={isSuccess} isError={isError} data={data} />
        </main>
    )
}
