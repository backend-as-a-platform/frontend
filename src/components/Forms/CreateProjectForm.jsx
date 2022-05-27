import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Auth } from '../../contexts/Auth';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { onChange } from '../../hooks/useForm';
import { login } from '../../hooks/useAuth';
import {
  textLabel,
  linkPrimary,
  textInput,
  textArea,
  checkBoxLabel,
  tooltipError,
} from '../../utils/classes';
import { createProject } from '../../hooks/useProject';

const CreateProjectForm = ({ onSuccess, setProjects }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onNameChange = (e) => onChange(e, setName, setError);
  const onDescriptionChange = (e) => onChange(e, setDescription, setError);
  const onSubmit = async (e) => {
    const createdProject = await createProject(name, description, setError);

    // Hide modal
    if (createdProject) {
      onSuccess();
      setProjects((oldProjects) => [...oldProjects, createdProject]);
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
            value={name}
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
            value={description}
            rows={3}
            placeholder="Optional description"
            onChange={onDescriptionChange}
          ></textarea>
        </div>
      </div>
      <button type="submit" className="w-full btn btn-primary">
        {isSubmitting && <SpinnerIcon size={5} />}
        Create
      </button>
    </form>
  );
};

export default CreateProjectForm;
