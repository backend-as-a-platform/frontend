import http, { transformResponse } from '../utils/http';

const onLogin = async (email, password, setResult) => {
  setResult('');

  try {
    const { data } = await http.post('/users/login', { email, password });

    // if (data && data.authToken) {
    //
    // }
  } catch ({ response }) {
    const error = transformResponse(response.data.reason);

    setResult(error);
  }
};

const onSignup = async (name, email, password, setResult) => {
  setResult('');

  try {
    const { data } = await http.post('/users/signup', {
      name,
      email,
      password,
    });

    const result = transformResponse(data.result);

    setResult(result);
  } catch ({ response }) {
    const error = transformResponse(response.data.reason);

    setResult(error);
  }
};

export { onLogin, onSignup };
