const testError = (input, error) =>
  error.toLowerCase().search(input.toLowerCase()) > -1 ? true : false;

const transformError = (error) => {
  error = error.replace(/\'/g, '');
  return `${error.charAt(0).toUpperCase()}${error.substr(1)}`;
};

const resetError = (setState) => setState('');

export { testError, transformError, resetError };
