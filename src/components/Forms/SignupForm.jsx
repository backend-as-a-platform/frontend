import { textLabel, textInput, linkPrimary } from '../../utils/classes';

const SignupForm = ({ onToggle }) => {
  return (
    <form className="space-y-5">
      <div>
        <label htmlFor="name" className={textLabel}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className={textInput}
          placeholder="John Doe"
          required
        />
      </div>
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
      <div>
        <button className="w-full mt-2 btn btn-primary">Sign up</button>
      </div>
      <p className="text-sm text-gray-900 font-medium dark:text-gray-300">
        Already registered?{' '}
        <a className={`cursor-pointer ${linkPrimary}`} onClick={onToggle}>
          Login
        </a>
      </p>
    </form>
  );
};

export default SignupForm;
