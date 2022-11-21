import { memo, useMemo, useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Input, Label } from './Form.styles';

export const PasswordInput = memo(
  ({ registerForm, passwordErrors }: PasswordInputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <>
        <Input
          type={showPassword ? 'text' : 'password'}
          id="floating_password"
          className="peer"
          placeholder=" "
          hasError={
            !!passwordErrors && passwordErrors.type !== 'firebase-error'
          }
          {...registerForm('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'The password must be 6 characters long or more',
            },
          })}
        />
        {useMemo(
          () => (
            <button
              type="button"
              className="absolute right-0 top-1 p-2"
              onClick={() => setShowPassword((prevState) => !prevState)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          ),
          [showPassword]
        )}
        <Label htmlFor="floating_password">Password</Label>
        <div className="absolute">
          {passwordErrors ? (
            <p className="text-xs text-red-600">{passwordErrors.message}</p>
          ) : null}
        </div>
      </>
    );
  }
);

export const EmailInput = memo(
  ({ emailErrors, registerForm }: EmailInputProps) => (
    <>
      <Input
        type="email"
        id="floating_email"
        className="peer"
        placeholder=" "
        hasError={!!emailErrors}
        {...registerForm('email', { required: 'Email is required' })}
      />
      <Label htmlFor="floating_email">Email address</Label>
      <div className="absolute">
        {emailErrors ? (
          <p className="text-xs text-red-600">{emailErrors.message}</p>
        ) : null}
      </div>
    </>
  )
);

type RegisterFormProp = {
  registerForm: UseFormRegister<{
    email: string;
    password: string;
  }>;
};

interface PasswordInputProps extends RegisterFormProp {
  passwordErrors: FieldError | undefined;
}

interface EmailInputProps extends RegisterFormProp {
  emailErrors: FieldError | undefined;
}
