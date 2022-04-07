import NavLinks from './NavLinks';
import DropdownIcon from '../Icons/DropdownIcon';

export const NavItems = () => (
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal p-2 text-lg">
      <NavLinks />
    </ul>
  </div>
);

export const NavItemsDropdown = () => (
  <div className="dropdown dropdown-end">
    <DropdownIcon />
    <ul
      tabIndex="0"
      className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden"
    >
      <NavLinks />
    </ul>
  </div>
);
