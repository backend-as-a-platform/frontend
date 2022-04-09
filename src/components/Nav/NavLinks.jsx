const NavLinks = ({onSignup}) => (
  <>
    <li>
      <a>Documentation</a>
    </li>
    <li className="lg:px-2" onClick={onSignup}>
      <a>Sign up</a>
    </li>
  </>
);

export default NavLinks;
