import { Link } from 'react-router-dom';
import Logo from '../Icons/Logo';

const NavBrand = ({ toggleTheme }) => {
  return (
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost normal-case text-3xl">
        <Logo />
        <h1 className="ml-1 lg:mb-1 lg:text-4xl">BaaP</h1>
      </Link>
    </div>
  );
};

export default NavBrand;
