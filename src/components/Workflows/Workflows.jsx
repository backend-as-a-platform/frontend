import WorkflowCard from './WorkflowCard';

const Workflows = () => (
  <div className="grid gap-24 md:max-w-full mx-3 md:mx-8">
    <WorkflowCard
      badge="Step 1"
      title="The quick, brown fox jumps over a lazy dog"
      description="Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric."
      image="https://open.cruip.com/static/media/features-split-image-01.d9cb99ce.png"
    />
    <WorkflowCard
      badge="Step 2"
      title="The quick, brown fox jumps over a lazy dog"
      description="Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric."
      image="https://open.cruip.com/static/media/features-split-image-02.3c569239.png"
    />
    <WorkflowCard
      badge="Step 3"
      title="The quick, brown fox jumps over a lazy dog"
      description="Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric."
      image="https://open.cruip.com/static/media/features-split-image-03.87e4d053.png"
    />
  </div>
);

export default Workflows;
