import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '@/modules/shared/components/button';
import { useAuth } from '@/modules/shared/hooks';
import { EmailInput, PasswordInput } from '../components/Form/FormComponents';
import { Input, Label } from '../components/Form/Form.styles';

interface RegisterFormInterface {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { register: registerUser } = useAuth();
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormInterface>();

  const onSubmit: SubmitHandler<RegisterFormInterface> = async ({
    email,
    password,
    firstName,
    lastName,
  }) => {
    setIsLoading(true);
    try {
      await registerUser({ email, password, firstName, lastName });
    } catch (error: any) {
      if (error.message.includes('invalid-email')) {
        setError('email', {
          type: 'invalid-email',
          message: 'The email address is badly formatted',
        });
      } else if (error.message.includes('email-already-in-use')) {
        setError('email', {
          type: 'email-already-in-use',
          message: 'The email address is already in use by another account',
        });
      } else if (error.message.includes('weak-password')) {
        setError('password', {
          type: 'weak-password',
          message: 'The password must be 6 characters long or more',
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
    <form className="grid gap-y-8 mt-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between gap-x-8">
        <div className="relative z-0 group">
          <Input
            type="text"
            id="floating_firstName"
            className="peer"
            placeholder=" "
            hasError={!!errors.firstName}
            {...registerForm('firstName', {
              required: 'First name is required',
            })}
          />
          <Label htmlFor="floating_firstName">First name</Label>
          <div className="absolute">
            {errors.firstName ? (
              <p className="text-xs text-red-600">{errors.firstName.message}</p>
            ) : null}
          </div>
        </div>
        <div className="relative z-0 group">
          <Input
            type="text"
            id="floating_lastName"
            className="peer"
            placeholder=" "
            hasError={!!errors.lastName}
            {...registerForm('lastName', {
              required: 'Last name is required',
            })}
          />
          <Label htmlFor="floating_lastName">Last name</Label>
          <div className="absolute">
            {errors.lastName ? (
              <p className="text-xs text-red-600">{errors.lastName.message}</p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="relative z-0 w-full group">
        <EmailInput emailErrors={errors.email} registerForm={registerForm} />
      </div>
      <div className="relative z-0 mb-4 w-full group">
        <PasswordInput
          registerForm={registerForm}
          passwordErrors={errors.password}
        />
      </div>
      <Button type="submit" isLoading={isLoading}>
        Create account
      </Button>
    </form>
  );
};
