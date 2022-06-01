import Modal from './Modal';
import CloneForm from '../Forms/CloneForm';

const CloneModal = ({
  name,
  description,
  show,
  onHide,
  setName,
  setDescription,
}) => {
  return (
    <Modal title="Clone project" show={show} onHide={onHide}>
      <CloneForm
        name={name}
        description={description}
        onSuccess={onHide}
        setName={setName}
        setDescription={setDescription}
      />
    </Modal>
  );
};

export default CloneModal;
