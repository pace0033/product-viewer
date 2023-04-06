import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialState) {
  //when calling our custom hook we pass in a key and an initial value.
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  //each time useLocalStorageState is called it will return a reference
  // to the state variable and the function to update the value
  return [state, setState];
}
