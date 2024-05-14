import React from 'react';

export const AuthContext = React.createContext<{
  signIn: (userEmail: string, psw: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  token: string;
}>({
  signIn: Promise.resolve,
  signOut: Promise.resolve,
  token: '',
  loading: false,
});

export function useAuthContext() {
  const value = React.useContext(AuthContext);

  return value;
}
