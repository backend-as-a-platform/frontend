const PageTitle = ({ children, topMargin }) => {
  return (
    <h1
      className={`inline-block my-${
        topMargin || '6'
      } text-2xl font-semibold text-gray-700 dark:text-gray-200`}
    >
      {children}
    </h1>
  );
};

export default PageTitle;
