import { Route, Routes } from 'react-router';
import ThemeProvider from './contexts/Theme';
import Home from './components/Routes/Home';

const App = () => {
  return (
    <ThemeProvider>
      <div className="mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-14 overflow-clip">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
