import Modal from './Modal';
import CreateForm from '../Forms/CreateForm';
import { useNavigate, useParams } from 'react-router';

const ValidateFormModal = ({ show, onSuccess }) => {
  return (
    <Modal title="Create form" show={show} closable={false}>
      <CreateForm onSuccess={onSuccess} />
    </Modal>
  );
};

const FormResponseModal = ({ show, onHide, title, body, created }) => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const onClick = (e) => {
    onHide();

    if (created) {
      navigate(`/projects/${projectId}`);
    }
  };

  return (
    <Modal title={title} show={show} onHide={onHide}>
      <p className="text-lg mb-5">{body}</p>
      <button className="w-full btn btn-primary" onClick={onClick}>
        Continue
      </button>
    </Modal>
  );
};

export default ValidateFormModal;
export { FormResponseModal };
