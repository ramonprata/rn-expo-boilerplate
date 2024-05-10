import { useQuery } from '@tanstack/react-query';
import DemoManageInstance from '../services';
import { DemoQueriesEnum } from '../types/DemoQueriesEnum';

export const useLoadData = () => {
  const { data, error, isPending } = useQuery({
    queryKey: [DemoQueriesEnum.programmingEnJoke],
    queryFn: DemoManageInstance.getRandomJoke,
  });
  return {
    data,
    error,
    isPending,
  };
};
