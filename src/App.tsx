import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from 'common/contexts/AuthContext';
// import ProtectedRoute from 'common/auth/ProtectedRoute';
import Navbar from 'common/components/Navbar';
const Home = lazy(() => import('pages/Home'));
const Signup = lazy(() => import('pages/Signup'));
const Signin = lazy(() => import('pages/Signin'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='bg-[var(--primaryDark)] min-h-dvh' />}>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                // <ProtectedRoute>
                <Home />
                // </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
