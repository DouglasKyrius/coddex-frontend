import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { PATH_AUTH } from '@/routes/paths';
import { Logo } from '@/modules/shared/components/Logo';
import { BackgroundStyle } from '../../components/BackgroundStyle';
import {
  AuthWrapper,
  BottomText,
  Divider,
  HeaderTitle,
  SocialLogin,
  SocialWrapper,
  SubTitle,
} from '../../components/Form/Form.styles';
import { RootStyle } from '../../components/RootStyle';
import { LoginForm } from '../../features';
import { useAuth } from '@/modules/shared/hooks';

export const Login = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <>
      <Helmet>
        <title>Sign in | Coddex</title>
      </Helmet>
      <BackgroundStyle>
        <RootStyle>
          <AuthWrapper>
            <div className="mb-20">
              <Logo isLink />
            </div>

            <HeaderTitle>Welcome back</HeaderTitle>
            <SubTitle>Please enter your details.</SubTitle>

            <LoginForm />

            <Divider>
              <span>or</span>
            </Divider>

            <SocialWrapper>
              <SocialLogin type="button" onClick={signInWithGoogle}>
                <FcGoogle size={25} />
                Log in with Google
              </SocialLogin>
            </SocialWrapper>

            <BottomText>
              Don&apos;t have an account?{' '}
              <Link to={PATH_AUTH.register}>Sign up for free</Link>
            </BottomText>
          </AuthWrapper>
        </RootStyle>
      </BackgroundStyle>
    </>
  );
};
