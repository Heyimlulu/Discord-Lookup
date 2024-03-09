import React, { useState, useEffect, useMemo } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_DISCORD_USER } from '../graphql/queries';
import { useParams } from 'react-router-dom';
import loadable from '@loadable/component';
import * as gtag from '../utils/gtag';
import { localstorage } from '../utils/localstorage';

export default function Homepage() {
  const { userId } = useParams();

  const [lastId, setLastId] = useState('');

  const isHome = window.location.pathname === '/';

  const InputForm = loadable(() => import('../components/InputForm'));
  const RecentSearch = loadable(() => import('../components/RecentSearch'));
  const UserCard = loadable(() => import('../components/Card/UserCard'));

  const [fetchDiscordUser, { data, loading, error }] = useLazyQuery(GET_DISCORD_USER, {
    fetchPolicy: 'cache-and-network',
  });

  useMemo(async () => {
    if (userId !== lastId && !isHome) {
      const { data } = await fetchDiscordUser({ variables: { userId } });
      const dataDiscordUser = data?.discord?.lookup?.user;

      gtag.event('search', 'user_id', 'user_id', userId);

      setLastId(userId);

      const { getItem, setItem } = localstorage();
      const recentSearches = new Set(getItem('DiscordNameHistory') || []);
      recentSearches.forEach((recentSearch) => {
        if (recentSearch.id === dataDiscordUser?.id) {
          recentSearches.delete(recentSearch);
        }
      });
      recentSearches.add(dataDiscordUser);
      setItem('DiscordNameHistory', [...recentSearches]);
    }
  }, [userId]);

  return (
    <div>
      <InputForm fetchDiscordUser={fetchDiscordUser} isLoading={loading} />
      {isHome ? <RecentSearch /> : <UserCard data={data} error={error} loading={loading} />}
    </div>
  );
}
