import WorkflowCard from './WorkflowCard';

const Workflows = () => (
  <div className="grid grid-cols-1 gap-14">
    <WorkflowCard
      badge="One"
      title="The quick, brown fox jumps over a lazy dog"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae."
      image="https://open.cruip.com/static/media/features-split-image-01.d9cb99ce.png"
    />
    <WorkflowCard
      badge="Two"
      title="The quick, brown fox jumps over a lazy dog"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae."
      image="https://open.cruip.com/static/media/features-split-image-02.3c569239.png"
    />
    <WorkflowCard
      badge="Three"
      title="The quick, brown fox jumps over a lazy dog"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae."
      image="https://open.cruip.com/static/media/features-split-image-03.87e4d053.png"
    />
  </div>
);

export default Workflows;
