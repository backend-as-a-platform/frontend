import React from 'react';
import routes from './routes';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Logo from '../Icons/Logo';
// import * as Icons from '../../icons';

function Icon({ icon }) {
  const Icon = icon;
  return <Icon />;
}

function SidebarContent() {
  const location = useLocation();

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <Link
        className="ml-6 text-2xl font-bold text-gray-800 dark:text-gray-200"
        to="/"
      >
        <Logo width={30} height={30} />
        <span className="mx-1">BaaP</span>
      </Link>
      <ul className="mt-6">
        {routes.map((route) => (
          <li className="relative px-6 py-3" key={route.name}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive
                  ? 'inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 text-gray-800 dark:text-gray-100'
                  : 'inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
              }
            >
              {location.pathname === route.path && (
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              )}
              <Icon icon={route.icon} />
              <span className="ml-4">{route.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarContent;
