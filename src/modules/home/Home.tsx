import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PATH_AUTH } from '@/routes/paths';
import { useAuth } from '../shared/hooks';
import { Button } from '../shared/components/button';
import { LoadingScreen } from '../shared/components/LoadingScreen';
import { Image } from '../shared/components/Image';

export const Home = () => {
  const { user, isInitialized, logout } = useAuth();

  const handleSignOut = async () => {
    await logout();
  };

  if (!isInitialized) return <LoadingScreen />;

  return (
    <>
      <Helmet>
        <title>Home | Coddex</title>
      </Helmet>
      <div className="h-screen flex flex-col justify-center items-center text-center gap-y-8 p-8">
        <h1 className="text-6xl font-semibold">Vite with Typescript</h1>

        {user ? (
          <>
            <p>
              Hello <span className="font-bold">{user.displayName}</span>
            </p>
            <Image
              alt="profile pic"
              width={95}
              height={95}
              effect="blur"
              src={user.photoURL || undefined}
              visibleByDefault={false}
              placeholderSrc="https://zone-assets-api.vercel.app/assets/img_placeholder.svg"
            />

            <div className="min-w-[8rem] grid gap-y-4">
              <Button onClickHandler={handleSignOut}>Sign out</Button>
            </div>
          </>
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
