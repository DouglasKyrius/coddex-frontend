import { lazy, LazyExoticComponent, Suspense } from 'react';
import ProgressBar from '@/modules/shared/components/ProgressBar';

const Loadable =
  (Component: LazyExoticComponent<() => JSX.Element>) => (props: any) =>
    (
      <>
        <ProgressBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Component {...props} />
        </Suspense>
      </>
    );

// Home
export const Home = Loadable(lazy(() => import('@/modules/home')));
// AUTHENTICATION
export const Login = Loadable(lazy(() => import('@/modules/auth/pages/login')));
export const Register = Loadable(
  lazy(() => import('@/modules/auth/pages/register'))
);
