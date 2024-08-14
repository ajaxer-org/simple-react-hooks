import React from "react";

export default function useLocalStorage<T>(key: string, initialValue?: T | null): [T, (value: T) => void] {
  const [value, setValue] = React.useState(() => {
    const localData = localStorage.getItem(key);

    if (localData !== null) return JSON.parse(localData);

    if (initialValue !== null) return JSON.parse(JSON.stringify(initialValue));

    return null;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
