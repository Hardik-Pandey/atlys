import React, { createContext, useContext, ReactNode, useState } from 'react';
import { getCookie } from 'common/utils/cookie';

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthProviderType {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  const jwtToken = getCookie('jwt');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!jwtToken);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
