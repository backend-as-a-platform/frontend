import HeroDescription from './HeroDescription';
import HeroTitle from './HeroTitle';

const HeroEnd = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10 md:pt-24 text-center md:pb-20">
      <HeroTitle text="An amazing sign off message" />
      <div className="max-w-3xl mx-auto">
        <HeroDescription
          text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum semper quis lectus nulla
          at volutpat diam ut venenatis."
        />
      </div>
    </div>
  );
};

export default HeroEnd;
