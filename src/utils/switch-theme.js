const switchTheme = (id) => {
  const themes = { true: 'light', false: 'dark' };

  document.documentElement.setAttribute('data-theme', themes[id]);
};

export default switchTheme;
