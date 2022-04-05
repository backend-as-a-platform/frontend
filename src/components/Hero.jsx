const Hero = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 md:pt-36 text-center md:pb-16">
    <h1
      className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
      data-aos="zoom-y-out"
    >
      Backend as a{' '}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        Platform
      </span>
    </h1>
    <div className="max-w-3xl mx-auto">
      <p
        className="text-xl text-gray-600 mb-8"
        data-aos="zoom-y-out"
        data-aos-delay="150"
      >
        Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever.
      </p>
      <div
        className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
        data-aos="zoom-y-out"
        data-aos-delay="300"
      >
        <a className="btn btn-primary w-full mb-4 sm:w-auto sm:mb-0">
          Get Started
        </a>
        <a className="btn w-full sm:w-auto sm:ml-4">View on Github</a>
      </div>
    </div>
  </div>
);

export default Hero;
