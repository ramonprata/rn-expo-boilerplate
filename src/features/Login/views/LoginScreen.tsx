import React from 'react';
import { ViewContent, Typography, Button } from '@shared/components';
import { useAuthContext } from '../../Auth/context/AuthContext';
import { router } from 'expo-router';
import { MainStackRoutesEnum } from '@/src/_app/types';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const { signIn } = useAuthContext();

  const handlePress = async (userEmail: string, psw: string) => {
    await signIn(userEmail, psw);
    router.navigate(MainStackRoutesEnum.PUBLIC_INTRO);
  };

  return (
    <ViewContent center>
      <Typography>LoginScreen</Typography>
      <Button onPress={() => handlePress('user', 'password')} title="Login" />
    </ViewContent>
  );
};

export default LoginScreen;
