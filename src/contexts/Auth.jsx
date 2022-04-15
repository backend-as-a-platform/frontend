import { createContext, useEffect, useState } from 'react';
import { decodeJwt } from 'jose';
import { cookies } from '../hooks/useAuth';

const Auth = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ _id: null, name: null, email: null });
  const cookie = cookies.get('auth');

  // Upon browser reload, auth object will be reset
  // This will re-populate it
  useEffect(() => {
    if (cookie) {
      const decodedCookie = decodeJwt(cookie);

      setAuth((current) => ({ ...current, ...decodedCookie }));
    }
  }, [cookie]);

  return <Auth.Provider value={[auth, setAuth]}>{children}</Auth.Provider>;
};

export { Auth };
export default AuthProvider;
