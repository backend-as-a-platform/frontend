import Modal from './Modal';

const DeleteProjectModal = ({ show, onHide }) => {
  const onClick = (e) => {
    //
    onHide();
  };
  return (
    <Modal title="Are you sure?" show={show} onHide={onHide}>
      <h1 className="leading-relaxed">
        This action cannot be undone. Doing so will also delete all the forms
        and records associated with this project.
      </h1>
      <button className="btn btn-primary mt-5 w-full" onClick={onClick}>
        Yes
      </button>
    </Modal>
  );
};

export default DeleteProjectModal;
