import { useParams } from 'react-router';
import FormEditor from './FormEditor';

const EditForm = ({ fields }) => {
  const { projectId, formId } = useParams();

  return <FormEditor project={projectId} form={formId} fields={fields} />;
};

export default EditForm;
