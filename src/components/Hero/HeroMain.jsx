import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import HeroLinks from './HeroLinks';
import HeroImage from './HeroImage';

const HeroMain = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 md:pt-36 text-center md:pb-16">
    <HeroTitle
      text={
        <>
          Backend as a{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Platform
          </span>
        </>
      }
    />
    <div className="max-w-3xl mx-auto">
      <HeroDescription text="Low code application development platform specifically for backends." />
      <HeroLinks />
    </div>
    <HeroImage />
  </div>
);

export default HeroMain;
