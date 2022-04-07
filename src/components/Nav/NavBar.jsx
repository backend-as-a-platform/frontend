import { useEffect, useState } from 'react';
import ToggleThemeIcon from '../Icons/ToggleThemeIcon';
import NavBrand from './NavBrand';
import { NavItems, NavItemsDropdown } from './NavItems';

const Navbar = ({ toggleTheme }) => {
  return (
    <div
      className="navbar sticky top-0 z-50 bg-base-100 backdrop-blur lg:border-b dark:border-b-slate-50/[0.06] shadow-sm py-1"
      data-aos="zoom-in"
      data-aos-delay="300"
      data-aos-once="true"
    >
      <NavBrand />
      <ToggleThemeIcon toggle={toggleTheme} />
      <NavItems />
      <NavItemsDropdown />
    </div>
  );
};

export default Navbar;
