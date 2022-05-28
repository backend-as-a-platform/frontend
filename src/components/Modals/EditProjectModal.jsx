import Modal from './Modal';
import EditProjectForm from '../Forms/EditProjectForm';

const EditProjectModal = ({
  name,
  description,
  show,
  onHide,
  setName,
  setDescription,
}) => {
  return (
    <Modal title="Edit project" show={show} onHide={onHide}>
      <EditProjectForm
        name={name}
        description={description}
        onSuccess={onHide}
        setName={setName}
        setDescription={setDescription}
      />
    </Modal>
  );
};

export default EditProjectModal;
