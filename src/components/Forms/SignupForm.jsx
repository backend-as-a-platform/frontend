import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { signup } from '../../hooks/useAuth';
import { testError } from '../../utils/http';
import {
  textLabel,
  textInput,
  linkPrimary,
  tooltipError,
  tooltipSuccess,
} from '../../utils/classes';

const SignupForm = ({ onToggle }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onChange = (e) => setError('');

  const onSubmit = async ({ name, email, password }) => {
    setError('');

    const res = await signup(name, email, password);

    if (res.error) {
      setError(res.error);
    } else {
      setError(res.result);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className={textLabel}>
          Name
        </label>
        <span
          className={`w-full ${testError('name', error) ? tooltipError : ''}`}
          data-tip={error}
        >
          <input
            type="text"
            id="name"
            className={textInput}
            placeholder="John Doe"
            required
            {...register('name')}
            onChange={onChange}
          />
        </span>
      </div>
      <div>
        <label htmlFor="email" className={textLabel}>
          Email
        </label>
        <span
          className={`${
            error
              ? (testError('email', error) && tooltipError) || tooltipSuccess // lazy workaround, should improve later.
              : ''
          } w-full`}
          data-tip={error}
        >
          <input
            type="email"
            name="email"
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
        <span
          className={`${
            testError('password', error) ? tooltipError : ''
          } w-full`}
          data-tip={error}
        >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className={textInput}
            required
            {...register('password')}
            onChange={onChange}
          />
        </span>
      </div>
      <div>
        <button type="submit" className="w-full mt-2 btn btn-primary">
          {isSubmitting && <SpinnerIcon size={5} />}
          Sign up
        </button>
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
