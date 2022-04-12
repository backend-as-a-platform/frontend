import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { login } from '../../hooks/useAuth';
import { resetError, testError } from '../../utils/form-error';
import {
  textLabel,
  linkPrimary,
  textInput,
  checkBoxLabel,
  tooltipError,
} from '../../utils/classes';

const LoginForm = ({ onToggle }) => {
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onChange = (e) => resetError(setError)

  const onSubmit = async ({ email, password, remember }) => {
    const res = await login(email, password);

    if (res.error) {
      setError(res.error);
    }
    // if (res.data && res.data.authToken) {
    //   //
    // }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email" className={textLabel}>
          Email
        </label>
        <span
          className={`w-full ${testError('email', error) ? tooltipError : ''}`}
          data-tip={error}
        >
          <input
            type="email"
            id="email"
            className={textInput}
            placeholder="name@company.com"
            required
            {...register('email')}
            onChange={onChange}
          />
        </span>
      </div>
      <div>
        <label htmlFor="password" className={textLabel}>
          Password
        </label>
        <input
          type="password"
          id="password"
          className={textInput}
          placeholder="••••••••"
          required
          {...register('password')}
          onChange={onChange}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              aria-describedby="remember"
              className="checkbox checkbox-sm"
              {...register('remember')}
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
      <button type="submit" className="w-full btn btn-primary">
        {isSubmitting && <SpinnerIcon size={5} />}
        Login
      </button>
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
