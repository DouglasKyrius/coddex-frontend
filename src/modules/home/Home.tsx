import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PATH_AUTH } from '@/routes/paths';
import { useAuth } from '../shared/hooks';
import { Button } from '../shared/components/button';

export const Home = () => {
  const { user, isInitialized, logout } = useAuth();

  if (!isInitialized) return <div>Loading...</div>;

  const handleSignOut = async () => {
    await logout();
  };

  return (
    <>
      <Helmet>
        <title>Home | Coddex</title>
      </Helmet>
      <div className="h-screen flex flex-col justify-center items-center text-center gap-y-8 p-8">
        <h1 className="text-6xl font-semibold">Vite with Typescript</h1>
        {user ? (
          <div className="min-w-[8rem]">
            <Button onClickHandler={handleSignOut}>Sign out</Button>
          </div>
        ) : (
          <>
            <Link to={PATH_AUTH.login}>Sign in</Link>
            <Link to={PATH_AUTH.register}>Sign up</Link>
          </>
        )}
      </div>
    </>
  );
};
