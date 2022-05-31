import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getForm } from '../../hooks/useForm';
import CTA from '../CTA/CTA';
import EditModal from '../Modals/EditModal';
import ArchiveModal from '../Modals/ArchiveModal';
import DeleteModal from '../Modals/DeleteModal';
import { PublishFormModal } from '../Modals/FormModal';
import PageTitle from '../Typography/PageTitle';
import PageButton from '../Typography/PageButton';
import FormPublishAlert from '../Alerts/FormPublishAlert';
import EditForm from '../Dashboard/EditForm';

const ManageForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [active, setActive] = useState('');
  const [fields, setFields] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateFormModal, setShowCreateFormModal] = useState(false);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const { projectId, formId } = useParams();
  const toggleEditModal = (e) => setShowEditModal(!showEditModal);
  const togglePublishModal = (e) => setShowPublishModal(!showPublishModal);
  const toggleArchiveModal = (e) => setShowArchiveModal(!showArchiveModal);
  const toggleDeleteModal = (e) => setShowDeleteModal(!showDeleteModal);

  useEffect(async () => {
    const form = await getForm(projectId, formId);

    if (form) {
      setName(form.name);
      setDescription(form.description);
      setFields(form.fields);
      setActive(form.active);

      // setRecords(await getRecords(projectId, formId));
    } else {
      navigate('/404');
    }
  }, []);

  return (
    <>
      <div>
        <PageTitle>{name}</PageTitle>
        {name ? (
          <>
            <PageButton
              style="error"
              label="Delete"
              onClick={toggleDeleteModal}
            />
            <PageButton
              style="warning"
              label={active ? 'Archive' : 'Unarchive'}
              onClick={toggleArchiveModal}
            />
            <PageButton
              style="info"
              label="Publish"
              onClick={togglePublishModal}
            />
            <PageButton
              style="primary"
              label="Edit"
              onClick={toggleEditModal}
            />
            <EditModal
              type="form"
              name={name}
              description={description}
              show={showEditModal}
              onHide={toggleEditModal}
              setName={setName}
              setDescription={setDescription}
            />
            <PublishFormModal formId={formId} />
            <ArchiveModal
              projectId={projectId}
              formId={formId}
              active={!active}
              setActive={setActive}
              show={showArchiveModal}
              onHide={toggleArchiveModal}
            />
            <DeleteModal
              projectId={projectId}
              formId={formId}
              show={showDeleteModal}
              onHide={toggleDeleteModal}
            />
          </>
        ) : null}
      </div>

      <CTA />

      {/* Todo: add form publish feature in backend */}
      {true ? <FormPublishAlert /> : null}

      <EditForm fields={fields} />

      {/* {records.length ? <FormsTable records={records} /> : null} */}
    </>
  );
};

export default ManageForm;
