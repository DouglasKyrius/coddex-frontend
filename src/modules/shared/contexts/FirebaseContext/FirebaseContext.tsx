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
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
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
const googleProvider = new GoogleAuthProvider();

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
    async ({ email, password }: { email: string; password: string }) =>
      signInWithEmailAndPassword(AUTH, email, password),
    []
  );

  const signInWithGoogle = useCallback(
    () => signInWithRedirect(AUTH, googleProvider),
    []
  );

  const register = useCallback(
    async ({
      email,
      password,
      firstName,
      lastName,
    }: {
      email: string;
      password: string;
      firstName?: string;
      lastName?: string;
    }) => {
      const res = await createUserWithEmailAndPassword(AUTH, email, password);
      const { user } = res;
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
    },
    []
  );

  const logout = useCallback(() => signOut(AUTH), []);

  const destroyUser = useCallback(() => deleteUser(state.user), [state.user]);

  const values = useMemo(
    () => ({
      ...state,
      login,
      logout,
      register,
      destroyUser,
      signInWithGoogle,
    }),
    [state, login, logout, register, destroyUser, signInWithGoogle]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
