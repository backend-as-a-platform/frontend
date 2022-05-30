import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { getProject } from '../../hooks/useProject';
import { getForms } from '../../hooks/useForm';
import CTA from '../CTA/CTA';
import EditModal from '../Modals/EditModal';
import ArchiveModal from '../Modals/ArchiveModal';
import DeleteModal from '../Modals/DeleteModal';
import PageTitle from '../Typography/PageTitle';
import PageButton from '../Typography/PageButton';
import SectionTitle from '../Typography/SectionTitle';
import SectionButton from '../Typography/SectionButton';
import FormsTable from '../Tables/FormsTable';

const ManageProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateFormModal, setShowCreateFormModal] = useState(false);
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();
  const { projectId } = useParams();
  const toggleEditModal = (e) => setShowEditModal(!showEditModal);
  const toggleArchiveModal = (e) => setShowArchiveModal(!showArchiveModal);
  const toggleDeleteModal = (e) => setShowDeleteModal(!showDeleteModal);

  useEffect(async () => {
    const project = await getProject(projectId);

    if (project) {
      setName(project.name);
      setDescription(project.description);

      setForms(await getForms(projectId));
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
              label="Archive"
              onClick={toggleArchiveModal}
            />
            <PageButton
              style="primary"
              label="Edit"
              onClick={toggleEditModal}
            />
            <EditModal
              type="project"
              name={name}
              description={description}
              show={showEditModal}
              onHide={toggleEditModal}
              setName={setName}
              setDescription={setDescription}
            />
            <ArchiveModal
              type="project"
              show={showArchiveModal}
              onHide={toggleArchiveModal}
            />
            <DeleteModal
              projectId={projectId}
              show={showDeleteModal}
              onHide={toggleDeleteModal}
            />
          </>
        ) : null}
      </div>

      <CTA />

      <div>
        <SectionTitle>Forms</SectionTitle>
        <SectionButton
          style="primary"
          label="Create form"
          link={true}
          to="forms/new"
        />
      </div>

      {forms.length ? <FormsTable forms={forms} /> : null}
    </>
  );
};

export default ManageProject;
