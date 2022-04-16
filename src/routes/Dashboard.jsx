import { Link } from 'react-router-dom';
import { linkPrimary } from '../utils/classes';
import FourOhThree from './403';

const Dashboard = () => {
  return (
    <>
      <h1>
        This is protected route. Should only be available to authenticated
        users. Try visiting this route without logging in and see it for
        yourself.
      </h1>
      <br />
      <h1>
        Also once logged in, you will be automatically redirected to this route
        if you visit home route ('/') again. Try going back and you'll know what
        I mean.
      </h1>
      <br />
      <Link to="/logout" className={linkPrimary}>
        Logout current session
      </Link>
      <br />
      <Link to="/logout-all" className={linkPrimary}>
        Logout all sessions
      </Link>
    </>
  );
};

export default Dashboard;
