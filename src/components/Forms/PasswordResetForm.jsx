import { useState } from 'react';
import { useForm } from 'react-hook-form';
import EyeIcon from '../Icons/EyeIcon';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { testError } from '../../utils/http';
import { onChange } from '../../hooks/useForm';
import { resetPassword, signup } from '../../hooks/useAuth';
import {
  textLabel,
  textInput,
  linkPrimary,
  tooltipError,
  tooltipSuccess,
} from '../../utils/classes';
import { useParams } from 'react-router';

const PasswordResetForm = ({ onToggle }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { passwordResetToken } = useParams();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onPasswordChange = (e) => onChange(e, setPassword, setError);
  const onEyeChange = (e) => setShowPassword(e.target.checked);
  const onSubmit = (e) => resetPassword(password, passwordResetToken, setError);

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              value={password}
              placeholder="••••••••"
              className={textInput}
              required
              onChange={onPasswordChange}
            />
            <div className="flex absolute inset-y-0 right-0 items-center pr-2">
              <EyeIcon onChange={onEyeChange} />
            </div>
          </div>
        </span>
      </div>
      <div>
        <button type="submit" className="w-full mt-2 btn btn-primary">
          {isSubmitting && <SpinnerIcon size={5} />}
          Change
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

export default PasswordResetForm;
