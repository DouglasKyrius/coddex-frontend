import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
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
import { RegisterForm } from '../../features';
import { PATH_AUTH } from '@/routes/paths';
import { useAuth } from '@/modules/shared/hooks';

export const Register = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <>
      <Helmet>
        <title>Sign up | Coddex</title>
      </Helmet>
      <BackgroundStyle>
        <RootStyle>
          <AuthWrapper>
            <div className="mb-20">
              <Logo isLink />
            </div>

            <HeaderTitle>Create an account</HeaderTitle>
            <SubTitle>Let&apos;s get started.</SubTitle>

            <RegisterForm />

            <Divider>
              <span>or</span>
            </Divider>

            <SocialWrapper>
              <SocialLogin type="button" onClick={signInWithGoogle}>
                <FcGoogle size={25} />
                Sign up with Google
              </SocialLogin>
            </SocialWrapper>

            <BottomText>
              Already have an account? <Link to={PATH_AUTH.login}>Sign in</Link>
            </BottomText>
          </AuthWrapper>
        </RootStyle>
      </BackgroundStyle>
    </>
  );
};
