import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Auth } from './contexts/Auth';
import ProtectedRoute from './hoc/ProtectedRoute';
import Home from './routes/Home';
import Docs from './routes/Docs';
import Dashboard from './routes/Dashboard';
import About from './routes/About';
import Contact from './routes/Contact';
import FAQ from './routes/FAQ';
import Support from './routes/Support';
import Logout from './routes/Logout';
import FourOhFour from './routes/404';

const App = () => {
  const [auth] = useContext(Auth);

  return (
    <Routes>
      <Route
        path="/"
        element={auth._id ? <Navigate to="/dashboard" replace /> : <Home />}
      />
      <Route path="/docs" element={<Docs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/support" element={<Support />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute route={<Dashboard />} />}
      />
      <Route path="/logout" element={<ProtectedRoute route={<Logout />} />} />
      <Route
        path="/logout-all"
        element={<ProtectedRoute route={<Logout all />} />}
      />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
};

export default App;
