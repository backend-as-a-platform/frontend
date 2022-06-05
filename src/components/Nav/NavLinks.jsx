import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from '../../contexts/Auth';

const NavLinks = ({ showLogin }) => {
  const [auth] = useContext(Auth);

  return (
    <>
      <li>
        <Link to="/docs">Documentation</Link>
      </li>
      {auth._id ? (
        <li className="lg:px-2">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      ) : (
        <li className="lg:px-2" onClick={showLogin}>
          <a>Login</a>
        </li>
      )}
    </>
  );
};

export default NavLinks;
