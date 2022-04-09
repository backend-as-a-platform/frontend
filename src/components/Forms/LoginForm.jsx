const LoginForm = ({ onToggle }) => {
  return (
    <form className="space-y-5">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="input input-bordered bg-gray-50 text-gray-900 block w-full p-2.5 dark:text-white dark:bg-gray-600 dark:placeholder-gray-400"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="input input-bordered bg-gray-50 text-gray-900 block w-full p-2.5 dark:text-white dark:bg-gray-600 dark:placeholder-gray-400"
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
            <label
              htmlFor="remember"
              className="font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <a className="text-sm text-blue-600 font-medium dark:text-blue-400 link-hover cursor-pointer">
          Lost Password?
        </a>
      </div>
      <button className="w-full btn btn-primary">Login</button>
      <p className="text-sm text-gray-900 font-medium dark:text-gray-300">
        Not registered yet?{' '}
        <a
          className="text-blue-600 dark:text-blue-400 link-hover cursor-pointer"
          onClick={onToggle}
        >
          Sign up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
