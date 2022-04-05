import { useEffect, useState } from 'react';
import NavBrand from './NavBrand';
import { NavItems, NavItemsDropdown } from './NavItems';

const Navbar = ({ toggleTheme }) => {
  return (
    <div className="navbar bg-base-100 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-18">
      <NavBrand toggleTheme={toggleTheme} />
      <NavItems />
      <NavItemsDropdown />
    </div>
  );
};

export default Navbar;
