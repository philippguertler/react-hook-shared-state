import { useState, useEffect } from 'react';

export function createSharedState(state) {
  const listeners = new Set();

  const user = () => {
    const [userState, setUserState] = useState(state);

    useEffect(() => {
      listeners.add(setUserState)
      return () => listeners.delete(setUserState);
    }, [])

    return userState;
  }

  const setter = newValue => {
    if (typeof newValue === 'function') {
      newValue = newValue(state);
    }
    state = newValue;
    listeners.forEach(listener => listener(newValue));
  }

  return [user, setter];
}
