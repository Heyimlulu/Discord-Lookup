export const localstorage = () => {
  const isBrowser = () => typeof window !== 'undefined';

  const getItem = (key) => {
    if (isBrowser()) {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
  };

  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { getItem, setItem };
};
