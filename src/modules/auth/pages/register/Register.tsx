import { Helmet } from 'react-helmet-async';
import { BackgroundStyle } from '../../components/BackgroundStyle';
import { RegisterForm } from '../../features';

export const Register = () => (
  <>
    <Helmet>
      <title>Sign up | Coddex</title>
    </Helmet>
    <BackgroundStyle>
      <RegisterForm />
    </BackgroundStyle>
  </>
);
