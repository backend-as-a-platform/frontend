import Modal from './Modal';
import LoginForm from '../Forms/LoginForm';
import SignupForm from '../Forms/SignupForm';
import RequestPasswordResetForm from '../Forms/RequestPasswordResetForm';

const AuthModal = ({
  title,
  show,
  login,
  reset,
  onHide,
  toggleToLogin,
  toggleToSignup,
  toggleToResetPassword,
}) => {
  return (
    <Modal title={title} show={show} onHide={onHide}>
      {login ? (
        <LoginForm
          onToggle={toggleToSignup}
          onToggleReset={toggleToResetPassword}
        />
      ) : reset ? (
        <RequestPasswordResetForm onToggle={toggleToLogin} />
      ) : (
        <SignupForm onToggle={toggleToLogin} />
      )}
    </Modal>
  );
};

const modalTitles = [
  'Login to your account',
  'Sign up to our platform',
  'Reset your password',
];

export default AuthModal;
export { modalTitles };
