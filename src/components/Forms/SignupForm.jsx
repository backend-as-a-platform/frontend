const SignupForm = ({ onToggle }) => {
  return (
    <form className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="input input-bordered bg-gray-50 text-gray-900 block w-full p-2.5 dark:text-white dark:bg-gray-600 dark:placeholder-gray-400"
          placeholder="John Doe"
          required
        />
      </div>
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
      <div>
        <button className="w-full mt-2 btn btn-primary">Sign up</button>
      </div>
      <p className="text-sm text-gray-900 font-medium dark:text-gray-300">
        Already registered?{' '}
        <a
          className="text-blue-600 dark:text-blue-400 link-hover cursor-pointer"
          onClick={onToggle}
        >
          Login
        </a>
      </p>
    </form>
  );
};

export default SignupForm;
