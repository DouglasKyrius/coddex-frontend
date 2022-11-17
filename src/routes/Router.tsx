import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { GuestGuard } from '@/modules/shared/guards/GuestGuard';
import * as Pages from './pages';

const router = createBrowserRouter([
  { path: '/', element: <Pages.Home /> },
  {
    path: 'auth',
    element: <GuestGuard />,
    children: [
      { element: <Navigate to="login" replace />, index: true },
      {
        path: 'login',
        element: <Pages.Login />,
      },
      {
        path: 'register',
        element: <Pages.Register />,
      },
    ],
  },
  { path: '/login', element: <Navigate to="/auth/login" />, index: true },
]);

export const Router = () => <RouterProvider router={router} />;
