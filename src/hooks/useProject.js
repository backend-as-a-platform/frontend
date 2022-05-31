import http, { transformResponse } from '../utils/http';

const getProject = async (id) => {
  try {
    const { data } = await http.get(`/projects/${id}`);

    return data;
  } catch (_) {
    return;
  }
};

const getProjects = async () => {
  try {
    const { data } = await http.get('/projects');

    return data;
  } catch (_) {
    return;
  }
};

const createProject = async (name, description, setResult) => {
  setResult('');

  try {
    const { data } = await http.post('/projects/new', { name, description });

    return data;
  } catch ({ response }) {
    const error = transformResponse(response.data.reason);

    setResult(error);

    return;
  }
};

const updateProject = async (id, name, description, setResult) => {
  setResult('');

  try {
    const { data } = await http.put(`/projects/${id}`, { name, description });

    return data;
  } catch ({ response }) {
    const error = transformResponse(response.data.reason);

    setResult(error);

    return;
  }
};

const deleteProject = async (id) => {
  try {
    const { data } = await http.delete(`/projects/${id}`);

    return data;
  } catch (_) {
    return;
  }
};

const setProjectStatus = async (id, status) => {
  try {
    const { data } = await http.post(`/projects/${id}/status`, {
      active: status,
    });

    return data;
  } catch (_) {
    return;
  }
};

export {
  getProject,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  setProjectStatus,
};
