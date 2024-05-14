import { Redirect } from 'expo-router';
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

  if (token) {
    return <Redirect href={MainStackRoutesEnum.PUBLIC_TERMS} />;
  }

  return null;
};

export default MainStack;
