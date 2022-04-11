const NavLinks = ({ showLogin }) => (
  <>
    <li>
      <a>Documentation</a>
    </li>
    <li className="lg:px-2" onClick={showLogin}>
      <a>Login</a>
    </li>
  </>
);

export default NavLinks;
