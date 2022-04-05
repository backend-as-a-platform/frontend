import { useEffect, useState } from 'react';
import NavBar from './components/Nav/NavBar';
import switchTheme from './utils/switch-theme';

import './assets/css/App.css';

const App = () => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = (e) => setTheme(!theme);

  useEffect(() => switchTheme(theme), [theme]);

  return (
    <>
      <NavBar toggleTheme={toggleTheme} />
      <div className="hero mt-20">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-6xl font-bold">
              Backend as a <span className="text-primary">Platform</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a className="btn btn-primary">Get Started</a>
            <a className="btn ml-2">View on Github</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
