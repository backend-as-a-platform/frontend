import { transformResponse } from '../utils/http';
import http from '../utils/http';

const login = async (email, password) => {
  try {
    const { data } = await http.post('/users/login', { email, password });
    return data;
  } catch (err) {
    const error = transformResponse(err.response.data.reason);
    return { error };
  }
};

const signup = async (name, email, password) => {
  try {
    const { data } = await http.post('/users/signup', {
      name,
      email,
      password,
    });

    const result = transformResponse(data.result);

    return { result };
  } catch (err) {
    const error = transformResponse(err.response.data.reason);
    return { error };
  }
};

export { login, signup };
