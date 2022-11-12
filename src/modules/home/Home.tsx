import { Helmet } from 'react-helmet-async';
import { GroupButtons } from './features/group-buttons';

export const Home = () => (
  <>
    <Helmet>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <title>Home | Coddex</title>
    </Helmet>
    <div className="h-screen flex flex-col justify-center items-center text-center gap-y-8 p-8">
      <h1 className="text-6xl font-semibold">Vite with Typescript</h1>
      <GroupButtons />
    </div>
  </>
);
