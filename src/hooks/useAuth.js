import { transformError } from '../utils/form-error';
import http from '../utils/http';

const login = async (email, password) => {
  try {
    return await http.post('/users/login', { email, password });
  } catch (err) {
    return { error: 'Email or Password is incorrect' };
  }
};

const signup = async (name, email, password) => {
  try {
    return await http.post('/users/signup', { name, email, password });
  } catch (err) {
    const error = transformError(err.response.data.reason);
    return { error };
  }
};

export { login, signup };
