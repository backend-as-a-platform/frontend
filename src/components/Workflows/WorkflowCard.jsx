const WorkflowCard = ({badge, title, description, image}) => {
  return (
      <div className="card flex bg-base-100 shadow-2xl md:mx-auto mx-7 sm:max-w-xl md:max-w-2xl">
        <div className="card-body sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs badge badge-success">
                {badge}
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
              {title}
            </h2>
            <p className="md:text-lg -mb-12">
              {description}
            </p>
          </div>
        </div>
        <div className="transition-shadow duration-300 hover:shadow-xl">
          <img
            className="object-cover w-full rounded-b-xl shadow-lg sm:h-64 md:h-80 lg:h-96"
            src={image}
            alt=""
          />
        </div>
      </div>
  );
};

export default WorkflowCard;
