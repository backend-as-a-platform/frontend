import { useParams } from 'react-router';
import { createFormRecord, getFormFields } from '../hooks/useForm';
import RenderRecordForm from '../components/Forms/RenderRecordForm';

const ManageFormRecord = () => {
  const { formId } = useParams();

  return (
    <div className="h-screen">
      <RenderRecordForm
        formId={formId}
        getFormFields={getFormFields}
        createFormRecord={createFormRecord}
      />
    </div>
  );
};

export default ManageFormRecord;
