const NavLinks = ({ showSignup }) => (
  <>
    <li>
      <a>Documentation</a>
    </li>
    <li className="lg:px-2" onClick={showSignup}>
      <a>Sign up</a>
    </li>
  </>
);

export default NavLinks;
