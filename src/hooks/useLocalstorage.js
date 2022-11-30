// import { useState, useEffect } from "react";

// const useLocalstorage = (key, initial) => {
//   const [value, setValue] = useState(() => {
//     if (typeof window !== "undefined") {
//       const savedData = window.localStorage.getItem(key);

//       if (savedData !== null) {
//         return JSON.parse(savedData);
//       }
//     }
//     return initial;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(value));
//   }, [value, key]);

//   return [value, setValue];
// };

// export default useLocalstorage;

import { useState } from "react";

export default function useLocalstorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
