import { useState, useEffect } from "preact/hooks";

export default function useLocalStorage(key: string, initialValue: []) {
  // Estado que se sincroniza con localStorage
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    } else {
      return initialValue;
    }
  });

  // Función para guardar en localStorage
  const setValue = (value: []) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
