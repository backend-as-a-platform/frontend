import HeroDescription from './HeroDescription';
import HeroLinks from './HeroLinks';
import HeroTitle from './HeroTitle';

const Hero = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 md:pt-36 text-center md:pb-16">
    <HeroTitle />
    <div className="max-w-3xl mx-auto">
      <HeroDescription />
      <HeroLinks />
    </div>
  </div>
);

export default Hero;
