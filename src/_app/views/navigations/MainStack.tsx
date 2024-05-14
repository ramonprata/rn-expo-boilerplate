import { Redirect, Stack } from 'expo-router';
import { MainStackRoutesEnum } from '../../types';
import { useAuthContext } from '@/src/features/Auth/context/AuthContext';
import { Typography } from '@/src/shared/components';

const MainStack = () => {
  const { loading, token } = useAuthContext();

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!loading && !token) {
    return <Redirect href={MainStackRoutesEnum.PUBLIC_LOGIN} />;
  }

  return (
    <Stack
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name={MainStackRoutesEnum.PUBLIC_INTRO} options={{ headerShown: false }} />
      <Stack.Screen name={MainStackRoutesEnum.PUBLIC_TERMS} options={{ headerShown: false }} />
    </Stack>
  );
};

export default MainStack;
