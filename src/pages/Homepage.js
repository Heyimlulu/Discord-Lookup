import React, { useState } from 'react';
import Api from '../services/api';
import * as gtag from '../utils/gtag';
import loadable from '@loadable/component';

export default function Homepage() {

    const [data, setData] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchUserFromApi = async (userId) => {
        gtag.event('set_search', 'search', 'search', userId);

        setData([]);
        setIsSuccess(false);
        setIsError(false);

        try {
            const response = await Api.getUserById(userId);
            const data = response.data;
    
            setData(data);
            setIsSuccess(true);
        } catch (error) {
            setData(error.response.data);
            setIsError(true);
        }
    }

    const Form = loadable(() => import('../components/Form'));
    const Card = loadable(() => import('../components/Card'));

    return (
        <main>
            <Form fetchUserFromApi={fetchUserFromApi} />
            <Card isSuccess={isSuccess} isError={isError} data={data} />
        </main>
    )
}
