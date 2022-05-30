import Modal from './Modal';
import EditProjectForm from '../Forms/EditProjectForm';
import EditForm from '../Forms/EditForm';

const EditModal = ({
  type,
  name,
  description,
  show,
  onHide,
  setName,
  setDescription,
}) => {
  const Component = type === 'project' ? EditProjectForm : EditForm;

  return (
    <Modal title={`Edit ${type}`} show={show} onHide={onHide}>
      <Component
        name={name}
        description={description}
        onSuccess={onHide}
        setName={setName}
        setDescription={setDescription}
      />
    </Modal>
  );
};

export default EditModal;
