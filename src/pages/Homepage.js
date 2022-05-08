import React, { useState } from 'react';
import Api from '../services/api';
import * as gtag from '../utils/gtag';
import loadable from '@loadable/component';

export default function Homepage() {

    const [userInfos, setUserInfos] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const retrieveUser = async (id) => {
      gtag.event('set_search', 'search', 'search', id);

      setIsSuccess(false);
      setIsError(false);

      Api.getUser(id).then(res => {
        setUserInfos(res.data);

        if (!res.success) {
          setIsError(true);
          return;
        }

        setIsSuccess(true);
      }).catch(() => {
        setIsError(true);
      });
    }

    const Form = loadable(() => import('../components/Form'));
    const Result = loadable(() => import('../components/Result'));

    return (
        <main className='mx-auto'>
            <Form retrieveUser={retrieveUser} />
            <Result isSuccess={isSuccess} isError={isError} userInfos={userInfos} />
        </main>
    )
}
