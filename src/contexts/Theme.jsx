import { createContext, useEffect, useState } from 'react';

const getTheme = () => {
  const theme = window.localStorage.getItem('theme');

  if (!theme || theme === 'true') {
    return true;
  } else {
    return false;
  }
};

const switchTheme = (id) => {
  const themes = { true: 'light', false: 'dark' };

  document.documentElement.setAttribute('data-theme', themes[id]);
  document.documentElement.setAttribute('class', themes[id]);

  window.localStorage.setItem('theme', id);
};

const Theme = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => switchTheme(theme), [theme]);

  return <Theme.Provider value={[theme, setTheme]}>{children}</Theme.Provider>;
};

export { Theme };
export default ThemeProvider;
