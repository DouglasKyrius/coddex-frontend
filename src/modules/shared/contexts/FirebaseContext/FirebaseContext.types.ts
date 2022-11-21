import { User, UserCredential } from 'firebase/auth';

export const ACTION_TYPES = {
  INITIALIZE: 'INITIALIZE',
};

export type InitialStateType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: User;
};

type EmailPasswordType = {
  email: string;
  password: string;
};

interface RegisterType extends EmailPasswordType {
  firstName?: string;
  lastName?: string;
}

export type Action = { type: string; payload: any };

export interface AuthContextInterface extends InitialStateType {
  login: ({ email, password }: EmailPasswordType) => Promise<UserCredential>;
  register: ({
    email,
    password,
    firstName,
    lastName,
  }: RegisterType) => Promise<void>;
  logout: () => Promise<void>;
  destroyUser: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}
