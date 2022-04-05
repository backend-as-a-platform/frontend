const NavBrand = ({ toggleTheme }) => {
  return (
    <div className="flex-1">
      <a className="btn btn-md btn-ghost normal-case text-3xl">
        <svg
          className="lg:w-9 w-8 text-deep-purple-accent-400"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeWidth="2"
          strokeLinecap="round"
          strokeMiterlimit="10"
          stroke="currentColor"
          fill="none"
        >
          <rect x="3" y="1" width="7" height="12" />
          <rect x="3" y="17" width="7" height="6" />
          <rect x="14" y="1" width="7" height="6" />
          <rect x="14" y="11" width="7" height="12" />
        </svg>
        <h1 className="ml-1 lg:mb-1 lg:text-4xl">BaaP</h1>
      </a>
    </div>
  );
};

export default NavBrand;
