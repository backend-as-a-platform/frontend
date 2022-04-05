import { useEffect, useState } from 'react';
import ToggleTheme from '../Icons/ToggleThemeIcon';
import NavBrand from './NavBrand';
import { NavItems, NavItemsDropdown } from './NavItems';

const Navbar = ({ toggleTheme }) => {
  return (
    <div className="navbar bg-base-100 py-5">
      <NavBrand />
      <ToggleTheme toggle={toggleTheme} />
      <NavItems />
      <NavItemsDropdown />
    </div>
  );
};

export default Navbar;
