import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import loadable from '@loadable/component';
import * as gtag from '../utils/gtag';
import { localstorage } from '../utils/localstorage';
import DiscordLookupRESTApi from '../services/api';

export default function Homepage() {
  const { userId } = useParams();

  const [result, setResult] = useState([]);
  const [lastId, setLastId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { getItem, setItem } = localstorage();
  const recentSearches = new Set(getItem('DiscordNameHistory') || []);

  const searchUserById = async () => {
    if (userId !== lastId) {
      gtag.event('set_search', 'search', 'search', userId);

      setIsLoading(true);
      setLastId(userId);

      try {
        const { data } = await DiscordLookupRESTApi.getUserById(userId);

        recentSearches.forEach((recentSearch) => {
          if (recentSearch.id === data.id) {
            recentSearches.delete(recentSearch);
          }
        });
        recentSearches.add(data);
        setItem('DiscordNameHistory', [...recentSearches]);

        setResult(data);
      } catch (error) {
        recentSearches.add({ id: userId });
        setItem('DiscordNameHistory', [...recentSearches]);
        setResult(error.response.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const InputForm = loadable(() => import('../components/InputForm'));
  const RecentSearch = loadable(() => import('../components/RecentSearch'));
  const Placeholder = loadable(() => import('../components/Card/Placeholder'));
  const UserCard = loadable(() => import('../components/Card/UserCard'));

  useEffect(() => {
    if (userId) {
      searchUserById();
    }
  }, [userId]);

  return (
    <div>
      <InputForm isLoading={isLoading} />
      {isLoading || (window.location.pathname === '/' && <RecentSearch />)}
      {isLoading && <Placeholder />}
      {!isLoading && <UserCard result={result} />}
    </div>
  );
}
