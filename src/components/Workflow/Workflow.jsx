const Workflow = () => {
  return (
    <div className="card bg-base-100 shadow-xl px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="card-body mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs badge badge-primary">
              One
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
            The quick, brown fox jumps over a lazy dog
          </h2>
          <p className="md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="https://api.lorem.space/image/car?w=400&h=225"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
