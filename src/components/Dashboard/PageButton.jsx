const PageButton = ({ label, onClick }) => {
  return (
    <button
      className="btn btn-sm btn-outline btn-primary float-right mt-7"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PageButton;
