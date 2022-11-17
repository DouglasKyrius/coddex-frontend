import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// hooks
import { useAuth } from '../hooks';

export const GuestGuard = ({ children }: { children?: ReactNode }) => {
  const { isAuthenticated, isInitialized } = useAuth();

  if (!isInitialized) return <div>Loading...</div>;

  if (isAuthenticated) return <Navigate to="/" />;

  return <>{children || <Outlet />}</>;
};
