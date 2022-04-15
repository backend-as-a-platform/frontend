import { Route, Routes } from 'react-router';
import ThemeProvider from './contexts/Theme';
import Home from './routes/Home';
import Docs from './routes/Docs';
import Dashboard from './routes/Dashboard';
import About from './routes/About';
import Contact from './routes/Contact';
import FAQ from './routes/FAQ';
import Support from './routes/Support';

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
        {/* 404 */}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
