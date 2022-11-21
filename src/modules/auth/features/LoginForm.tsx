import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { ForgotPassword } from '../components/Form/Form.styles';
import { useAuth } from '@/modules/shared/hooks';
import { Button } from '@/modules/shared/components/button';
import { EmailInput, PasswordInput } from '../components/Form/FormComponents';

interface LoginFormInterface {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>();

  const onSubmit: SubmitHandler<LoginFormInterface> = async ({
    email,
    password,
  }) => {
    setIsLoading(true);
    try {
      await login({ email, password });
    } catch (error: any) {
      if (error.message.includes('auth/user-not-found')) {
        setError('email', {
          type: 'not-found',
          message: "The email you entered isn't connected to an account",
        });
      } else if (error.message.includes('auth/wrong-password')) {
        setError('password', {
          type: 'wrong-password',
          message: 'The password is invalid',
        });
      } else if (error.message.includes('auth/too-many-requests')) {
        setError('password', {
          type: 'firebase-error',
          message:
            'Access to this account has been temporarily disabled due to many ' +
            'failed login attempts. You can immediately restore it by resetting ' +
            'your password or you can try again later',
        });
      } else if (error.message.includes('auth/user-disabled')) {
        setError('password', {
          type: 'firebase-error',
          message: 'This account is disabled',
        });
      } else {
        setError('password', {
          type: 'firebase-error',
          message: 'An error occurred, please try again later',
        });
      }
    }
    setIsLoading(false);
  };

  return (
    <form className="grid gap-y-4 mt-7" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative z-0 mb-6 w-full group">
        <EmailInput emailErrors={errors.email} registerForm={register} />
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <PasswordInput
          passwordErrors={errors.password}
          registerForm={register}
        />
      </div>
      <ForgotPassword>Forgot Password?</ForgotPassword>
      <Button type="submit" isLoading={isLoading}>
        Log in
      </Button>
    </form>
  );
};
