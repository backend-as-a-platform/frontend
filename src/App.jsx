import { Route, Routes } from 'react-router';
import ThemeProvider from './contexts/Theme';
import Home from './components/Routes/Home';
import Dashboard from './components/Routes/Dashboard';

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
