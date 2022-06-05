import { useContext, useEffect, useState } from 'react';
import { Search } from '../contexts/Search';
import CTA from '../components/CTA/CTA';
import PageTitle from '../components/Typography/PageTitle';
import { getProjects } from '../hooks/useProject';
import { getForms } from '../hooks/useForm';
import FormsTable from '../components/Tables/FormsTable';

const Forms = () => {
  const [projects, setProjects] = useState([]);
  const [forms, setForms] = useState([]);
  const [filteredForms, setFilteredForms] = useState();
  const [selectedProject, setSelectedProject] = useState('');
  const [search] = useContext(Search);

  useEffect(async () => {
    const projects = await getProjects();

    setProjects(projects);
  }, []);

  useEffect(async () => {
    if (selectedProject) {
      const forms = await getForms(selectedProject._id);
      const activeForms = forms.filter((form) => form.active);

      setForms(activeForms);
      setFilteredForms(activeForms);
    }
  }, [selectedProject]);

  const onProjectChange = (e) => {
    const selected = projects.find(
      (project) => project.name === e.target.value
    );

    setSelectedProject(selected);
  };

  useEffect(() => {
    const filtered = forms.filter(
      (form) =>
        form.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        form.description.toLowerCase().indexOf(search.toLowerCase()) > -1
    );

    setFilteredForms(filtered);
  }, [search]);

  return (
    <div>
      <PageTitle>Forms</PageTitle>
      <select
        className="select select-bordered select-sm mt-7 max-w-xs float-right"
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
      <CTA />
      {filteredForms && filteredForms.length ? (
        <FormsTable forms={filteredForms} hideStatus newRecord />
      ) : (
        <p className="ml-0.5">No forms found</p>
      )}
    </div>
  );
};

export default Forms;
