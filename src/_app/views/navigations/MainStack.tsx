import { Redirect, Stack, usePathname } from 'expo-router';
import { MainStackRoutesEnum } from '../../types';
import { useAuth } from '../../hooks/useAuth';
import { Typography, ViewContent } from '@/src/shared/components';

const MainStack = () => {
  const { shouldRedirectLogin, loading, userAuthenticated } = useAuth();

  if (loading) {
    return (
      <ViewContent center>
        <Typography>Loading...</Typography>
      </ViewContent>
    );
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
