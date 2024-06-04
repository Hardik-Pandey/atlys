import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from 'common/contexts/AuthContext';

const useAuth = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return;
};

export default useAuth;
