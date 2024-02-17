import { useState } from 'react';

export const useLocalStorage = (
  key,
  initialValue,
) => {
  const [value, setValue] = useState(() => {
    try {
      const data = localStorage.getItem(key);

      return data ? JSON.parse(data) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const save = (data) => {
    setValue(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  return [value, save];
};