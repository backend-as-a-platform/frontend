import { useEffect } from 'react';
import NavBrand from './NavBrand';
import { NavItems, NavItemsDropdown } from './NavItems';
import ToggleThemeIcon from '../Icons/ToggleThemeIcon';

const NavBar = ({ toggleTheme, showLogin }) => {
  return (
    <div className="navbar sticky top-0 z-10 bg-base-100 backdrop-blur lg:border-b dark:border-b-slate-50/[0.06] shadow-sm py-1 dark:bg-gray-800">
      <NavBrand />
      <ToggleThemeIcon toggle={toggleTheme} />
      <NavItems showLogin={showLogin} />
      <NavItemsDropdown showLogin={showLogin} />
    </div>
  );
};

export default NavBar;
