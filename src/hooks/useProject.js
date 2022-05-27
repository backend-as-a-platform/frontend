import http, { cookies, transformResponse } from '../utils/http';

const createProject = async (name, description, setResult) => {
  setResult('');

  try {
    const { data } = await http.post('/projects/new', { name, description });

    return data;
  } catch ({ response }) {
    const error = transformResponse(response.data.reason);

    setResult(error);

    return false;
  }
};

const getProjects = async () => {
  // Hope no exceptions will be thrown
  const { data } = await http.get('/projects');

  return data;
};

export { createProject, getProjects };
