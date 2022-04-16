import { logout, logoutAll } from '../hooks/useAuth';

const Logout = async ({ all }) => {
  if (all) {
    await logoutAll();
  } else {
    await logout();
  }

  // Anyhow, react router navigate doesn't seem to work exclusively for '/'
  // So no option but to use window.location
  window.location.pathname = '/';

  return null;
};

export default Logout;
