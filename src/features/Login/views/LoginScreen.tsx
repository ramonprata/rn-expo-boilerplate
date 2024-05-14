import React from 'react';
import { ViewContent, Typography, Pressable } from '@shared/components';
import { useAuth } from '@/src/_app';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const { mutation } = useAuth();

  return (
    <ViewContent center>
      <Typography>LoginScreen</Typography>
      <Pressable onPress={() => mutation.mutate({ userEmail: 'user.email', psw: '1234856' })}>
        <Typography>Login</Typography>
      </Pressable>
    </ViewContent>
  );
};

export default LoginScreen;
