import { useEffect, useState } from 'react';
import switchTheme from './utils/switch-theme';
import NavBar from './components/Nav/NavBar';
import Hero from './components/Hero/Hero';
import FeaturesBlock from './components/Features/FeaturesBlock';

const App = () => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = (e) => setTheme(!theme);

  useEffect(() => switchTheme(theme), [theme]);

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-14">
      <NavBar toggleTheme={toggleTheme} />
      <Hero />
      <FeaturesBlock />
    </div>
  );
};

export default App;
