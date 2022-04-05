const DropdownIcon = () => (
  <label tabIndex="0" className="btn btn-ghost lg:hidden swap swap-rotate">
    <input type="checkbox" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="swap-off inline-block w-7 h-7 stroke-current"
    >
      <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="swap-on fill-current"
    >
      <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
    </svg>
  </label>
);

export default DropdownIcon;
