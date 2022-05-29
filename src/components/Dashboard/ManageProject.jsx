import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { getProject } from '../../hooks/useProject';
import CTA from '../CTA/CTA';
import ArchiveProjectModal from '../Modals/ArchiveProjectModal';
import DeleteProjectModal from '../Modals/DeleteProjectModal';
import EditProjectModal from '../Modals/EditProjectModal';
import PageTitle from '../Typography/PageTitle';
import PageButton from './PageButton';

const ManageProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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
            <EditProjectModal
              name={name}
              description={description}
              show={showEditModal}
              onHide={toggleEditModal}
              setName={setName}
              setDescription={setDescription}
            />
            <ArchiveProjectModal
              show={showArchiveModal}
              onHide={toggleArchiveModal}
            />
            <DeleteProjectModal
              id={projectId}
              show={showDeleteModal}
              onHide={toggleDeleteModal}
            />
          </>
        ) : null}
      </div>

      <CTA />

      <PageTitle topMargin={1}>Forms</PageTitle>
    </>
  );
};

export default ManageProject;
