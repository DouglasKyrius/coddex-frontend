import { useContext } from 'react';
import { AuthContext } from '../contexts/FirebaseContext/FirebaseContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
