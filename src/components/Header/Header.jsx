import { useContext, useState } from 'react';
import { Theme } from '../../contexts/Theme';
import { SidebarContext } from '../../contexts/Sidebar';
import SearchIcon from '../Icons/SearchIcon';
// import {
//   SearchIcon,
//   MoonIcon,
//   SunIcon,
//   BellIcon,
//   MenuIcon,
//   OutlinePersonIcon,
//   OutlineCogIcon,
//   OutlineLogoutIcon,
// } from '../icons';
import ToggleThemeIcon from '../Icons/ToggleThemeIcon';
import DropdownIcon from '../Icons/DropdownIcon';
import PersonIcon from '../Icons/PersonIcon';
import LogoutIcon from '../Icons/LogoutIcon';
import { Link } from 'react-router-dom';

function Header() {
  const { toggleSidebar } = useContext(SidebarContext);
  const [theme, setTheme] = useContext(Theme);
  const toggleTheme = (e) => setTheme(!theme);

  return (
    <header className="z-25 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-indigo-500 dark:text-indigo-300">
        <button
          className="p-1 mr-5 -ml-6 rounded-md focus:outline-none focus:shadow-outline-purple"
          aria-label="Menu"
        >
          <DropdownIcon />
        </button>
        <div className="flex justify-center flex-1">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-indigo-700 dark:focus-within:text-indigo-500">
            <div className="absolute inset-y-0 flex items-center left-0 pl-2">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search for projects"
              className="input input-sm w-full max-w-xs pl-8 text-gray-700 dark:text-gray-300 placeholder:text-gray-400 placeholder:dark:text-gray-500"
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          <li className="flex">
            <ToggleThemeIcon toggle={toggleTheme} size={6} />
          </li>

          <li className="relative">
            <button className="rounded-full focus:shadow-outline-purple focus:outline-none">
              <div className="avatar align-middle dropdown dropdown-end">
                <div
                  tabIndex="0"
                  className="w-9 rounded-full border-gray-500 border-2"
                >
                  <img
                    src="https://api.lorem.space/image/face?hash=33791"
                    alt="Avatar"
                  />
                </div>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-sm text-gray-500 dark:text-gray-400 font-semibold"
                >
                  <li>
                    <a>
                      <PersonIcon size={4} />
                      <span>Profile</span>
                    </a>
                  </li>
                  <li>
                    <Link to="/logout">
                      <LogoutIcon />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
