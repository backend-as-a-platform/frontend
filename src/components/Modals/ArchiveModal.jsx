import Modal from './Modal';

const ArchiveModal = ({ type, show, onHide }) => {
  return (
    <Modal title="Are you sure?" show={show} onHide={onHide}>
      <h1>
        Archiving will make the {type} readonly. You can revert back anytime by
        using the <span className="font-semibold">Unarchive</span> option.
      </h1>
    </Modal>
  );
};

export default ArchiveModal;
