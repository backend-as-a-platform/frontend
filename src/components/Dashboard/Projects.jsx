import { useState, useEffect, useContext } from 'react';
import PageTitle from '../Typography/PageTitle';
import CTA from '../CTA/CTA';
import PageButton from '../Typography/PageButton';
import CreateProjectModal from '../Modals/CreateProjectModal';
import ProjectsTable from '../Tables/ProjectsTable';
import { getProjects } from '../../hooks/useProject';
import { Search } from '../../contexts/Search';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search] = useContext(Search);

  const toggleModal = (e) => setShowModal(!showModal);

  useEffect(async () => {
    const projects = await getProjects();

    setProjects(projects);
    setFilteredProjects(projects);
  }, []);

  useEffect(() => {
    const filtered = projects.filter((project) => {
      return (
        project.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        project.description.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        (project.active ? 'active' : 'archive').indexOf(search.toLowerCase()) >
          -1
      );
    });

    setFilteredProjects(filtered);
  }, [search]);

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

      {filteredProjects.length ? (
        <ProjectsTable projects={filteredProjects} />
      ) : (
        <p className="mb-8 ml-0.5">No projects found</p>
      )}

      <CreateProjectModal
        show={showModal}
        onHide={toggleModal}
        setProjects={setFilteredProjects}
      />
    </>
  );
};

export default Projects;
