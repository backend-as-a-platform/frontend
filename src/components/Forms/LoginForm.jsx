import {
  textLabel,
  linkPrimary,
  textInput,
  checkBoxLabel,
} from '../../utils/classes';

const LoginForm = ({ onToggle }) => {
  return (
    <form className="space-y-5">
      <div>
        <label htmlFor="email" className={textLabel}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={textInput}
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className={textLabel}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className={textInput}
          required
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="checkbox checkbox-sm"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className={checkBoxLabel}>
              Remember me
            </label>
          </div>
        </div>
        <a className={`text-sm font-medium cursor-pointer ${linkPrimary}`}>
          Lost Password?
        </a>
      </div>
      <button className="w-full btn btn-primary">Login</button>
      <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
        Not registered yet?{' '}
        <a className={`cursor-pointer ${linkPrimary}`} onClick={onToggle}>
          Sign up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
