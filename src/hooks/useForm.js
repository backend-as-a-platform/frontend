const onChange = (e, setter, resetError) => {
  if (resetError) {
    resetError('');
  }

  setter(e.target.value);
};

export { onChange };
