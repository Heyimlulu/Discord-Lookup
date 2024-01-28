import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
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

  const { loading, error, data, refetch } = useQuery(GET_DISCORD_USER, {
    variables: { userId },
  });

  useEffect(() => {
    if (data && userId !== lastId) {
      gtag.event('search', 'user_id', 'user_id', userId);

      setLastId(userId);

      const { getItem, setItem } = localstorage();
      const recentSearches = new Set(getItem('DiscordNameHistory') || []);

      recentSearches.forEach((recentSearch) => {
        if (recentSearch.id === data.discord.lookup.user.id) {
          recentSearches.delete(recentSearch);
        }
      });
      recentSearches.add(data.discord.lookup.user);
      setItem('DiscordNameHistory', [...recentSearches]);
    }
  }, [userId, data, refetch]);

  return (
    <div>
      <InputForm isLoading={loading} />
      {isHome ? <RecentSearch /> : <UserCard data={data} error={error} loading={loading} />}
    </div>
  );
}
