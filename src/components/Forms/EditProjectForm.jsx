import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { onChange } from '../../hooks/useForm';
import { updateProject } from '../../hooks/useProject';
import {
  textLabel,
  textInput,
  textArea,
  checkBoxLabel,
  tooltipError,
} from '../../utils/classes';

const EditProjectForm = ({
  name,
  description,
  onSuccess,
  setName,
  setDescription,
}) => {
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [error, setError] = useState('');
  const { projectId } = useParams();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onNameChange = (e) => onChange(e, setNewName, setError);
  const onDescriptionChange = (e) => onChange(e, setNewDescription, setError);
  const onSubmit = async (e) => {
    const updatedProject = await updateProject(
      projectId,
      newName,
      newDescription,
      setError
    );

    // Hide modal
    if (updatedProject) {
      onSuccess();
      setName(updatedProject.name);
      setDescription(updatedProject.description);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className={textLabel}>
          Name
        </label>
        <span
          className={`w-full ${error ? tooltipError : ''}`}
          data-tip={error}
        >
          <input
            type="text"
            id="name"
            className={textInput}
            placeholder="my-awesome-project"
            value={newName}
            required
            onChange={onNameChange}
          />
        </span>
      </div>
      <div>
        <label htmlFor="description" className={textLabel}>
          Description
        </label>
        <div className="relative">
          <textarea
            id="description"
            className={textArea}
            value={newDescription}
            rows={3}
            placeholder="Optional description"
            onChange={onDescriptionChange}
          ></textarea>
        </div>
      </div>
      <button type="submit" className="w-full btn btn-primary">
        {isSubmitting && <SpinnerIcon size={5} />}
        Update
      </button>
    </form>
  );
};

export default EditProjectForm;
