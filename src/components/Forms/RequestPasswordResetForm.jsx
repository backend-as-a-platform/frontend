import { useState } from 'react';
import { useForm } from 'react-hook-form';
import EyeIcon from '../Icons/EyeIcon';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { onChange } from '../../hooks/useForm';
import { requestPasswordReset } from '../../hooks/useAuth';
import {
  textLabel,
  linkPrimary,
  textInput,
  checkBoxLabel,
  tooltipError,
  tooltipSuccess,
} from '../../utils/classes';
import { testError } from '../../utils/http';

const RequestPasswordResetForm = ({ onToggle, onToggleReset }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [sentMail, setSentMail] = useState(false);
  const [error, setError] = useState('');
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onEmailChange = (e) => onChange(e, setEmail, setError);
  const onSubmit = async (e) => {
    const success = await requestPasswordReset(email, setError);

    setSentMail(success);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label htmlFor="email" className={textLabel}>
          Email
        </label>
        <span
          className={`w-full ${
            error
              ? (testError('valid', error) && tooltipError) || tooltipSuccess
              : ''
          }`}
          data-tip={error}
        >
          <input
            type="email"
            id="email"
            className={textInput}
            placeholder="name@company.com"
            value={email}
            required
            onChange={onEmailChange}
          />
        </span>
      </div>
      <button type="submit" className="w-full btn btn-primary">
        {isSubmitting && <SpinnerIcon size={5} />}
        Reset
      </button>
      <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
        Back to{' '}
        <a className={`cursor-pointer ${linkPrimary}`} onClick={onToggle}>
          Login
        </a>
      </p>
    </form>
  );
};

export default RequestPasswordResetForm;
