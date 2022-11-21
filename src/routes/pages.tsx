import { lazy, LazyExoticComponent, Suspense } from 'react';
import { LoadingScreen } from '@/modules/shared/components/LoadingScreen';

const Loadable =
  (Component: LazyExoticComponent<() => JSX.Element>) => (props: any) =>
    (
      <>
        <Suspense fallback={<LoadingScreen />}>
          <Component {...props} />
        </Suspense>
      </>
    );

// HOME
export const Home = Loadable(lazy(() => import('@/modules/home')));
// AUTHENTICATION
export const Login = Loadable(lazy(() => import('@/modules/auth/pages/login')));
export const Register = Loadable(
  lazy(() => import('@/modules/auth/pages/register'))
);
