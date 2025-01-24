import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(handleValue);

  function handleValue() {
    let currentValue;
    console.info("PHASE 1", currentValue);
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
      console.info("PHASE 2", currentValue);

      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      currentValue = defaultValue;
    }
    console.info("PHASE 3", currentValue);
    return currentValue;
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
