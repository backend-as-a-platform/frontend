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
import { Link } from 'react-router-dom';

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
          New password
        </label>
        <span
          className={`w-full ${
            error
              ? (testError('malformed', error) && tooltipError) ||
                tooltipSuccess
              : ''
          }`}
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
        Back to{' '}
        <Link className={`cursor-pointer ${linkPrimary}`} to="/">
          Home
        </Link>
      </p>
    </form>
  );
};

export default PasswordResetForm;
