import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from 'common/contexts/AuthContext';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
