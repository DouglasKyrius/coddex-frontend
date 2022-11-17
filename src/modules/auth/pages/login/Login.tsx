import { Helmet } from 'react-helmet-async';
import { BackgroundStyle } from '../../components/BackgroundStyle';
import { LoginForm } from '../../features';

export const Login = () => (
  <>
    <Helmet>
      <title>Sign in | Coddex</title>
    </Helmet>
    <BackgroundStyle>
      <LoginForm />
    </BackgroundStyle>
  </>
);
