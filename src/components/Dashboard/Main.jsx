import { useEffect, useState } from 'react';
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
  const [forms, setForms] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');

  useEffect(async () => {
    setProjects(await getProjects());
  }, []);

  const onProjectChange = (e) => {
    const selected = projects.filter(
      (project) => project.name === e.target.value
    )[0];
    setSelectedProject(selected);
  };

  useEffect(async () => {
    if (selectedProject) {
      setForms(await getForms(selectedProject._id));
    } else {
      setForms([]);
    }
  }, [selectedProject]);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <CTA />

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total projects" value="137">
          {/* <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          /> */}
        </InfoCard>
        <InfoCard title="Total forms" value="1337">
          {/* <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          /> */}
        </InfoCard>
        <InfoCard title="Total records" value="31337">
          {/* <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          /> */}
        </InfoCard>
        <InfoCard title="Archived projects" value="37">
          {/* <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          /> */}
        </InfoCard>
      </div>

      {projects.length ? (
        <>
          <SectionTitle>Projects</SectionTitle>
          <ProjectsTable projects={projects} readonly={true} />
        </>
      ) : null}

      {projects.length ? (
        <>
          <SectionTitle>Forms</SectionTitle>
          <select
            className="select select-bordered select-sm max-w-xs float-right"
            value={selectedProject && selectedProject.name}
            onChange={onProjectChange}
          >
            <option defaultValue>Select project</option>
            <>
              {projects.map((project) => (
                <option key={project._id} value={project.name}>
                  {project.name}
                </option>
              ))}
            </>
          </select>
          {forms && forms.length ? (
            <FormsTable forms={forms} readonly={true} />
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default Dashboard;
