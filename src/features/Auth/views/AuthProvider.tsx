import { AuthContext } from '../context/AuthContext';
import { usePersistToken } from '../hooks/useStorage';
import AuthManager from '../services';

export function AuthProvider(props: React.PropsWithChildren) {
  const { loading, token, setToken } = usePersistToken();

  const handleSignIn = async (userEmail: string, psw: string) => {
    try {
      const token = await AuthManager.authenticate(userEmail, psw);
      setToken(token);
    } catch (error) {
      console.log('object:>>: ', error);
      // render error screen instead of children
    }
  };
  return (
    <AuthContext.Provider
      value={{
        signIn: handleSignIn,
        signOut: async () => {
          setToken(null);
        },
        token,
        loading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
