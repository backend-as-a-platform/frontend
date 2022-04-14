import { useEffect, useState } from 'react';
import AOS from 'aos';
import { getTheme, switchTheme } from './utils/theme';
import lazyLoadImage from './utils/lazy-load-image';
import NavBar from './components/Nav/NavBar';
import HeroMain from './components/Hero/HeroMain';
import HeroDesign from './components/Hero/HeroDesign';
import HeroSimple from './components/Hero/HeroSimple';
import Features from './components/Features/Features';
import Workflows from './components/Workflows/Workflows';
import HeroEnd from './components/Hero/HeroEnd';
import Footer from './components/Footer/Footer';
import AuthModal from './components/Modals/AuthModal';

import 'aos/dist/aos.css';

const App = () => {
  const [theme, setTheme] = useState(getTheme());
  const modalTitles = ['Login to your account', 'Sign up to our platform'];
  const [modalTitle, setModalTitle] = useState(modalTitles[0]);
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleTheme = (e) => setTheme(!theme);
  const toggleModal = (e) => {
    if (!showModal) {
      toggleToLogin(e);
    }

    setShowModal(!showModal);
  };
  const toggleToLogin = (e) => {
    setModalTitle(modalTitles[0]);
    setShowLogin(true);
  };
  const toggleToSignup = (e) => {
    setModalTitle(modalTitles[1]);
    setShowLogin(false);
  };

  useEffect(() => {
    AOS.init({ mirror: true, once: true });
    lazyLoadImage(AOS.refresh);
  }, []);
  useEffect(() => switchTheme(theme), [theme]);

  return (
    <div className="mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-14 overflow-clip">
      <NavBar toggleTheme={toggleTheme} showLogin={toggleModal} />
      <HeroMain />
      <HeroDesign />
      <Features />
      <HeroSimple
        title="Workflow that is super easy"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum semper quis lectus nulla
          at volutpat diam ut venenatis."
      />
      <Workflows />
      <HeroEnd title="Don't think, just start!" />
      <Footer />
      <AuthModal
        title={modalTitle}
        show={showModal}
        login={showLogin}
        toggleToLogin={toggleToLogin}
        toggleToSignup={toggleToSignup}
        onHide={toggleModal}
      />
    </div>
  );
};

export default App;
