import { createContext, useEffect, useState } from 'react';
import { decodeJwt } from 'jose';
import { authToken, cookies } from '../utils/http';

const Auth = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ _id: null, name: null, email: null });

  // Upon browser reload, auth object will be reset
  // This will re-populate it
  useEffect(() => {
    if (authToken) {
      const decodedCookie = decodeJwt(authToken);

      setAuth((current) => ({ ...current, ...decodedCookie }));
    }
  }, [authToken]);

  return <Auth.Provider value={[auth, setAuth]}>{children}</Auth.Provider>;
};

export { Auth };
export default AuthProvider;
