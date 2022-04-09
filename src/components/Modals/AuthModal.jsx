import Modal from './Modal';
import LoginForm from '../Forms/LoginForm';
import SignupForm from '../Forms/SignupForm';

const AuthModal = ({
  title,
  show,
  signup,
  onHide,
  toggleToLogin,
  toggleToSignup,
}) => {
  return (
    <Modal title={title} show={show} onHide={onHide}>
      {signup ? (
        <SignupForm onToggle={toggleToLogin} />
      ) : (
        <LoginForm onToggle={toggleToSignup} />
      )}
    </Modal>
  );
};

export default AuthModal;
