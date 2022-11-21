import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoadingScreen } from '../components/LoadingScreen';
// hooks
import { useAuth } from '../hooks';

export const GuestGuard = ({ children }: { children?: ReactNode }) => {
  const { isAuthenticated, isInitialized } = useAuth();

  if (!isInitialized) return <LoadingScreen />;

  if (isAuthenticated) return <Navigate to="/" />;

  return <>{children || <Outlet />}</>;
};
