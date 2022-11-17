import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash, FaFacebook, FaTwitter } from 'react-icons/fa';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { RootStyle } from '../components/RootStyle';
import { Button } from '@/modules/shared/components/button';
import { Logo } from '@/modules/shared/components/Logo';
import { PATH_AUTH } from '@/routes/paths';
import {
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
import { useAuth } from '@/modules/shared/hooks';

interface RegisterFormInterface {
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register: registerUser, isAuthenticated } = useAuth();
  const { register: registerForm, handleSubmit } =
    useForm<RegisterFormInterface>();

  const onSubmit: SubmitHandler<RegisterFormInterface> = async ({
    email,
    password,
  }) => {
    setIsLoading(true);
    try {
      await registerUser({ email, password });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    console.log(isAuthenticated);
  };

  return (
    <RootStyle>
      <AuthWrapper>
        <div className="mb-20">
          <Logo isLink />
        </div>

        <HeaderTitle>Create an account</HeaderTitle>
        <SubTitle>Let&apos;s get started.</SubTitle>

        <form className="grid gap-y-8 mt-8" onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="flex justify-between gap-x-8">
            <div className="flex relative z-0 group">
              <Input
                type="text"
                name="floating_name"
                id="floating_name"
                className="peer"
                placeholder=" "
                required
              />
              <Label htmlFor="floating_name">Name</Label>
            </div>
            <div className="flex relative z-0 group">
              <Input
                type="text"
                name="floating_username"
                id="floating_username"
                className="peer"
                placeholder=" "
                required
              />
              <Label htmlFor="floating_username">Username</Label>
            </div>
          </div> */}
          <div className="relative z-0 w-full group">
            <Input
              type="email"
              id="floating_email"
              className="peer"
              placeholder=" "
              required
              {...registerForm('email', { required: true })}
            />
            <Label htmlFor="floating_email">Email address</Label>
          </div>
          <div className="relative z-0 mb-1 w-full group">
            <Input
              type={showPassword ? 'text' : 'password'}
              id="floating_password"
              className="peer"
              placeholder=" "
              required
              {...registerForm('password', { required: true })}
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
          <Button type="submit" isLoading={isLoading}>
            Create account
          </Button>
        </form>

        <Divider>
          <span>or sign up with</span>
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
          Already have an account? <Link to={PATH_AUTH.login}>Sign in</Link>
        </BottomText>
      </AuthWrapper>
    </RootStyle>
  );
};
