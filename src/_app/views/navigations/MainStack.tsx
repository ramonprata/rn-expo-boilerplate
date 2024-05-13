import { Stack } from 'expo-router';
import { MainStackRoutesEnum } from '../../types';
import { useAuth } from '../../hooks/useAuth';

const MainStack = () => {
  const { isUserAuthenticated } = useAuth();

  const renderMainScreen = () => {
    if (isUserAuthenticated) {
      return <Stack.Screen name={MainStackRoutesEnum.TABS} options={{ headerShown: false }} />;
    }

    return <Stack.Screen name={MainStackRoutesEnum.PUBLIC} options={{ headerShown: false }} />;
  };

  return (
    <Stack>
      {renderMainScreen()}
      <Stack.Screen name={MainStackRoutesEnum.NOT_FOUND} />
    </Stack>
  );
};

export default MainStack;
