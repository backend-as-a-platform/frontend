import { useEffect, useState } from 'react';
import AOS from 'aos';
import { getTheme, switchTheme } from './utils/theme';
import lazyLoadImage from './utils/lazy-load-image';
import NavBar from './components/Nav/NavBar';
import HeroMain from './components/Hero/HeroMain';
import HeroDesign from './components/Hero/HeroDesign';
import FeaturesBlock from './components/Features/FeaturesBlock';
import Footer from './components/Footer/Footer';
import HeroSimple from './components/Hero/HeroSimple';
import Workflows from './components/Workflows/Workflows';
import HeroEnd from './components/Hero/HeroEnd';

import 'aos/dist/aos.css';

const App = () => {
  const [theme, setTheme] = useState(getTheme());
  const toggleTheme = (e) => setTheme(!theme);

  useEffect(() => {
    AOS.init({ mirror: true });
    lazyLoadImage(AOS.refresh);
  }, []);
  useEffect(() => switchTheme(theme), [theme]);

  return (
    <div className="mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-14 overflow-clip">
      <NavBar toggleTheme={toggleTheme} />
      <HeroMain />
      <HeroDesign />
      <FeaturesBlock />
      <HeroSimple
        title="Workflow that is super easy"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum semper quis lectus nulla
          at volutpat diam ut venenatis."
      />
      <Workflows />
      <HeroEnd title="Don't think, just start!" />
      <Footer />
    </div>
  );
};

export default App;
