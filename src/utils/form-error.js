export const testError = (input, error) =>
  error.toLowerCase().search(input.toLowerCase()) > -1 ? true : false;

export const transformError = (error) => {
  error = error.replace(/\'/g, '');
  return `${error.charAt(0).toUpperCase()}${error.substr(1)}`;
};
