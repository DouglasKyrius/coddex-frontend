import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { firebaseApp } from '../../services/firebase';
import { reducer } from './FirebaseContext.reducer';
import { ACTION_TYPES, AuthContextInterface } from './FirebaseContext.types';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const AUTH = getAuth(firebaseApp);

const AuthContext = createContext({} as AuthContextInterface);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    () =>
      onAuthStateChanged(AUTH, (user) => {
        if (user) {
          dispatch({
            type: ACTION_TYPES.INITIALIZE,
            payload: { isAuthenticated: true, user },
          });
        } else {
          dispatch({
            type: ACTION_TYPES.INITIALIZE,
            payload: { isAuthenticated: false, user: null },
          });
        }
      }),
    []
  );

  const login = useCallback(
    ({ email, password }: { email: string; password: string }) =>
      signInWithEmailAndPassword(AUTH, email, password),
    []
  );

  const register = useCallback(
    ({ email, password }: { email: string; password: string }) =>
      createUserWithEmailAndPassword(AUTH, email, password),
    []
  );

  const logout = useCallback(() => signOut(AUTH), []);

  const values = useMemo(
    () => ({
      ...state,
      login,
      logout,
      register,
    }),
    [state, login, logout, register]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
