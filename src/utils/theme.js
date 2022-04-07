export const getTheme = () => {
  const theme = window.localStorage.getItem('theme');

  if (theme && theme !== 'false') {
    return true;
  } else {
    return false;
  }
};

export const switchTheme = (id) => {
  const themes = { true: 'light', false: 'dark' };

  document.documentElement.setAttribute('data-theme', themes[id]);
  window.localStorage.setItem('theme', id);
};
