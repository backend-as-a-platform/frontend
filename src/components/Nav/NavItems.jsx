import { Link, NavLink, useLocation } from 'react-router-dom';
import NavLinks from './NavLinks';
import DropdownIcon from '../Icons/DropdownIcon';
import DashboardDropdownIcon from '../Icons/DashboardDropdownIcon';
import routes from '../Sidebar/routes';

const Icon = ({ icon }) => {
  const Icon = icon;
  return <Icon />;
};

export const NavItems = ({ showLogin }) => (
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal p-2 text-lg">
      <NavLinks showLogin={showLogin} />
    </ul>
  </div>
);

export const NavItemsDropdown = ({ showLogin }) => (
  <div className="dropdown dropdown-end">
    <DropdownIcon />
    <ul
      tabIndex="0"
      className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden"
    >
      <NavLinks showLogin={showLogin} />
    </ul>
  </div>
);

export const DashboardNavItemsDropdown = () => {
  const location = useLocation();
  return (
    <div className="dropdown">
      <DashboardDropdownIcon />
      <ul
        tabIndex="1"
        className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden"
      >
        {routes.map((route) => (
          <li key={route.name}>
            <Link to={route.path} className="text-gray-800 dark:text-gray-400">
              {location.pathname === route.path && (
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              )}
              <Icon icon={route.icon} />
              <span
                className={`ml-4 ${
                  location.pathname === route.path
                    ? 'font-semibold dark:text-gray-50'
                    : ''
                }`}
              >
                {route.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
