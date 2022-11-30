import { useState, useEffect } from "react";

const useLocalstorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const savedData = window.localStorage.getItem(key);

      if (savedData !== null) {
        return JSON.parse(savedData);
      }
    }
    return initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalstorage;
