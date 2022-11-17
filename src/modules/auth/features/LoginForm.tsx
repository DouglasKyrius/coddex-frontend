import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash, FaFacebook, FaTwitter } from 'react-icons/fa';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { RootStyle } from '../components/RootStyle';
import {
  ForgotPassword,
  HeaderTitle,
  Input,
  Label,
  AuthWrapper,
  MobileSocialWrapper,
  SocialLogin,
  SocialWrapper,
  SubTitle,
  BottomText,
  Divider,
} from '../components/Form/Form.styles';
import { Button } from '@/modules/shared/components/button';
import { PATH_AUTH } from '@/routes/paths';
import { Logo } from '@/modules/shared/components/Logo';
import { useAuth } from '@/modules/shared/hooks';

interface LoginFormInterface {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormInterface>();

  const onSubmit: SubmitHandler<LoginFormInterface> = async ({
    email,
    password,
  }) => {
    setIsLoading(true);
    try {
      await login({ email, password });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <RootStyle>
      <AuthWrapper>
        <div className="mb-20">
          <Logo isLink />
        </div>

        <HeaderTitle>Welcome back</HeaderTitle>
        <SubTitle>Please enter your details.</SubTitle>

        <form className="grid gap-y-4 mt-7" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative z-0 mb-6 w-full group">
            <Input
              type="email"
              id="floating_email"
              className="peer"
              placeholder=" "
              required
              {...register('email', { required: true })}
            />
            <Label htmlFor="floating_email">Email address</Label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <Input
              type={showPassword ? 'text' : 'password'}
              id="floating_password"
              className="peer"
              placeholder=" "
              required
              {...register('password', { required: true })}
            />
            <button
              type="button"
              className="absolute right-0 top-1 p-2"
              onClick={() => setShowPassword((prevState) => !prevState)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <Label htmlFor="floating_password">Password</Label>
          </div>
          <ForgotPassword>Forgot Password?</ForgotPassword>
          <Button type="submit" isLoading={isLoading}>
            Log in
          </Button>
        </form>

        <Divider>
          <span>or sign in with</span>
        </Divider>

        <SocialWrapper>
          <SocialLogin type="button">
            <FcGoogle size={25} />
            Google
          </SocialLogin>
          <SocialLogin type="button">
            <FaTwitter size={25} color="#1DA1F2" />
            Twitter
          </SocialLogin>
          <SocialLogin type="button">
            <FaFacebook size={25} color="#4267B2" />
            Facebook
          </SocialLogin>
        </SocialWrapper>

        <MobileSocialWrapper>
          <FcGoogle size={30} />
          <FaTwitter size={30} color="#1DA1F2" />
          <FaFacebook size={30} color="#4267B2" />
        </MobileSocialWrapper>

        <BottomText>
          Don&apos;t have an account?{' '}
          <Link to={PATH_AUTH.register}>Sign up for free</Link>
        </BottomText>
      </AuthWrapper>
    </RootStyle>
  );
};
