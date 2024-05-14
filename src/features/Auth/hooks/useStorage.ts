import { useState, useCallback, useEffect } from 'react';

import AuthManager from '../services';

export function usePersistToken() {
  const [token, setTokenValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await AuthManager.getUserToken();
        if (token) {
          setTokenValue(token);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    getToken();
  }, []);

  const setToken = useCallback((value: string | null) => {
    if (value) {
      setTokenValue(value);
    }
  }, []);

  return {
    loading,
    token,
    setToken,
  };
}
