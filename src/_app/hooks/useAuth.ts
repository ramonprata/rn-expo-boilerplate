import { useState } from 'react';

export const useAuth = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  // check user authenticated

  return {
    isUserAuthenticated,
  };
};
