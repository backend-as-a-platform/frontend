import Modal from './Modal';

const ArchiveProjectModal = ({ show, onHide }) => {
  return (
    <Modal title="Are you sure?" show={show} onHide={onHide}>
      <h1>
        This action cannot be undone. It will also delete all the forms and
        records associated with this projects.
      </h1>
    </Modal>
  );
};

export default ArchiveProjectModal;
