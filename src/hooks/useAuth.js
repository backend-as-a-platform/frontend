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
    console.log(err.response);
    // return err.response;
  }
};

export { login, signup };
