import { Cookies } from 'react-cookie';
import http, { transformResponse } from '../utils/http';

const cookies = new Cookies();
let authToken = null;

const login = async (email, password, remember, setResult) => {
  setResult('');
  try {
    const { data } = await http.post('/users/login', { email, password });
    // Cookie expires in 7 days
    const maxAge = remember ? 7 * 24 * 60 * 60 - 60 : null;

    authToken = data.authToken;

    cookies.set('auth', authToken, { path: '/', maxAge });

    return authToken;
  } catch ({ response }) {
    const error = transformResponse(response.data.reason);

    setResult(error);

    return false;
  }
};

const signup = async (name, email, password, setResult) => {
  setResult('');

  try {
    const { data } = await http.post('/users/signup', {
      name,
      email,
      password,
    });

    const result = transformResponse(data.result);

    setResult(result);

    return true;
  } catch ({ response }) {
    const error = transformResponse(response.data.reason);

    setResult(error);

    return false;
  }
};

const logout = async (all) => {
  cookies.remove('auth');

  try {
    // ${all ? '/all' : ''}
    await http.get(`/users/logout/all`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return true;
  } catch ({ response }) {
    return false;
  }
};

export { cookies, login, signup, authToken, logout };
