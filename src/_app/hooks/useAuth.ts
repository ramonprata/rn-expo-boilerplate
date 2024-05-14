import { useMutation, useQuery } from '@tanstack/react-query';
import AppManagerInstance from '../services';
import { AppQueriesEnum } from '../types/AppQueriesEnum';
import { router } from 'expo-router';
import { MainStackRoutesEnum } from '../types';

export const useAuth = () => {
  const query = useQuery({
    queryKey: [AppQueriesEnum.getToken],
    queryFn: () => AppManagerInstance.getToken(),
  });

  const mutation = useMutation({
    mutationFn: (userInfo: { userEmail: string; psw: string }) => {
      return AppManagerInstance.authenticate(userInfo.userEmail, userInfo.psw);
    },
    onSuccess: () => router.navigate(MainStackRoutesEnum.PUBLIC_INTRO),
  });

  return {
    mutation,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isPending: mutation.isPending,
    loading: query.isFetching,
    shouldRedirectLogin: !query.isFetching && !query.data,
    userAuthenticated: !!query.data,
  };
};
