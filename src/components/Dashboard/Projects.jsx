import { useState, useEffect } from 'react';
import PageTitle from '../Typography/PageTitle';
import CTA from '../CTA/CTA';
import InfoCard from '../Cards/InfoCard';
import DashboardTable from '../Tables/DashboardTable';
import PageButton from './PageButton';
import CreateProjectModal from '../Modals/CreateProjectModal';
import { getProjects } from '../../hooks/useProject';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (e) => setShowModal(!showModal);

  useEffect(async () => {
    setProjects(await getProjects());
  }, []);

  return (
    <>
      <div>
        <PageTitle>Projects</PageTitle>
        <PageButton
          style="primary"
          label="Create project"
          onClick={toggleModal}
        />
      </div>

      <CTA />

      {/* <DashboardTable /> */}
      {projects.length ? (
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, i) => (
              <tr key={project._id}>
                <td>{i + 1}</td>
                <td>
                  <Link to={project._id} className="hover:underline">
                    {project.name}
                  </Link>
                </td>
                <td>{project.description}</td>
                <td>
                  <div className="badge badge-success">running</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      <CreateProjectModal
        show={showModal}
        onHide={toggleModal}
        setProjects={setProjects}
      />
    </>
  );
};

export default Projects;
