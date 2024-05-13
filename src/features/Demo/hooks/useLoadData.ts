import { useQuery } from '@tanstack/react-query';
import { DemoQueriesEnum } from '../types/DemoQueriesEnum';
import DemoManageInstance from '../services/index';

export const useLoadData = () => {
  const { data, error, isPending, isFetching, refetch } = useQuery({
    queryKey: [DemoQueriesEnum.programmingEnJoke],
    queryFn: () => DemoManageInstance.getRandomJoke(),
  });
  return {
    data,
    error,
    loading: isPending || isFetching,
    refetch,
  };
};
