import { UserCredential } from 'firebase/auth';

export const ACTION_TYPES = {
  INITIALIZE: 'INITIALIZE',
};

export type InitialStateType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: any;
};

type EmailPasswordType = {
  email: string;
  password: string;
};

export type Action = { type: string; payload: any };

export interface AuthContextInterface extends InitialStateType {
  login: ({ email, password }: EmailPasswordType) => Promise<UserCredential>;
  register: ({ email, password }: EmailPasswordType) => Promise<UserCredential>;
  logout: () => Promise<void>;
}
