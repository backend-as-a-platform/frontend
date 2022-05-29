import WorkflowCard from './WorkflowCard';

const Workflows = () => (
  <div className="grid gap-24 md:max-w-full mx-3 md:mx-8">
    <WorkflowCard
      badge="Step 1"
      title="Create a new project"
      description="Signup/Login into the BaaP platform. On the dashboard page, click on create project and enter details of your project and click the submit  button.."
      image="https://open.cruip.com/static/media/features-split-image-01.d9cb99ce.png"
    />
    <WorkflowCard
      badge="Step 2"
      title="Build forms"
      description="On the project page, click on create forms and enter the details and submit. A GUI based form builder page will be loaded. Here you can drag and drop from components."
      image="https://open.cruip.com/static/media/features-split-image-02.3c569239.png"
    />
    <WorkflowCard
      badge="Step 3"
      title="Update forms"
      description="You can either archive , delete or edit the form from corresponding page."
      image="https://open.cruip.com/static/media/features-split-image-03.87e4d053.png"
    />
  </div>
);

export default Workflows;
