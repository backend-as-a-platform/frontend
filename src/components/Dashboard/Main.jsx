import { useContext, useEffect, useState } from 'react';
import { Search } from '../../contexts/Search';
import PageTitle from '../Typography/PageTitle';
import CTA from '../CTA/CTA';
import InfoCard from '../Cards/InfoCard';
import { getProjects } from '../../hooks/useProject';
import ProjectsTable from '../Tables/ProjectsTable';
import SectionTitle from '../Typography/SectionTitle';
import FormsTable from '../Tables/FormsTable';
import { getForms } from '../../hooks/useForm';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [forms, setForms] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [search] = useContext(Search);

  useEffect(async () => {
    const projects = await getProjects();

    setProjects(projects);
    setFilteredProjects(projects);
  }, []);

  useEffect(() => {
    const filtered = projects.filter(
      (project) =>
        project.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        project.description.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        (project.active ? 'active' : 'archive').indexOf(search.toLowerCase()) >
          -1
    );

    setFilteredProjects(filtered);
  }, [search]);

  useEffect(() => {
    const selectedProjectFound = filteredProjects.filter(
      (project) => project.name == selectedProject.name
    );

    if (!selectedProjectFound.length) {
      setSelectedProject('');
    }
  }, [filteredProjects]);

  useEffect(async () => {
    if (selectedProject) {
      setForms(await getForms(selectedProject._id));
    } else {
      setForms([]);
    }
  }, [selectedProject]);

  const onProjectChange = (e) => {
    const selected = filteredProjects.filter(
      (project) => project.name === e.target.value
    )[0];

    setSelectedProject(selected);
  };

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <CTA />

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total projects" value="137" />
        <InfoCard title="Total forms" value="1337" />
        <InfoCard title="Total records" value="31337" />
        <InfoCard title="Archived projects" value="37" />
      </div>

      <SectionTitle>Projects</SectionTitle>
      {filteredProjects.length ? (
        <ProjectsTable projects={filteredProjects} readonly={true} />
      ) : null}

      {filteredProjects.length ? (
        <>
          <SectionTitle>Forms</SectionTitle>
          <select
            className="select select-bordered select-sm max-w-xs float-right"
            value={selectedProject && selectedProject.name}
            onChange={onProjectChange}
          >
            <option defaultValue>Select project</option>
            <>
              {filteredProjects.map((project) => (
                <option key={project._id} value={project.name}>
                  {project.name}
                </option>
              ))}
            </>
          </select>
          {forms && forms.length ? (
            <FormsTable forms={forms} readonly />
          ) : (
            <p className="mb-8">No forms found</p>
          )}
        </>
      ) : (
        <p className="mb-8">No projects found</p>
      )}
    </>
  );
};

export default Dashboard;
