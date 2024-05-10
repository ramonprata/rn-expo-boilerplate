import { useQuery } from '@tanstack/react-query';
import { DemoQueriesEnum } from '../types/DemoQueriesEnum';
import { DemoManager } from '../services/DemoManager';

export const useLoadData = () => {
  const DemoManageInstance = new DemoManager();
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
