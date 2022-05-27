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
  try {
    const { data } = await http.get('/projects');

    return data;
  } catch (err) {
    console.log(err);
  }
};

export { createProject, getProjects };
