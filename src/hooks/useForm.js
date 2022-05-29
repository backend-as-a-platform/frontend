import http, { transformResponse } from '../utils/http';

// Not related to BaaP custom forms
const onChange = (e, setter, resetError) => {
  if (resetError) {
    resetError('');
  }

  setter(e.target.value);
};

const validateForm = async (projectId, name, description, setResult) => {
  try {
    const { data } = await http.post(`/projects/${projectId}/forms/new`, {
      name,
      description,
      test: true,
    });

    return data.validated;
  } catch ({ response }) {
    const error = transformResponse(response.data.reason);

    setResult(error);

    return false;
  }
};

const getForms = async (projectId) => {
  try {
    const { data } = await http.get(`/projects/${projectId}/forms`);

    return data;
  } catch (_) {
    return;
  }
};

export { onChange, validateForm, getForms };
