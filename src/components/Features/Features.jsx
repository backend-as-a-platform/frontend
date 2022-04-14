import FeatureCard from './FeatureCard';
import {
  FeatureOneIcon,
  FeatureTwoIcon,
  FeatureThreeIcon,
} from '../Icons/FeatureIcons';

const Features = () => (
  <div className="py-3">
    <div className="px-8 mx-auto max-w-6xl py-10 sm:py-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      <div
        data-aos="fade-out"
        data-aos-delay="400"
        data-aos-anchor-placement="top-bottom"
      >
        <FeatureCard
          icon={FeatureOneIcon}
          title="Simple"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <div
        data-aos="fade-out"
        data-aos-delay="600"
        data-aos-anchor-placement="top-bottom"
      >
        <FeatureCard
          icon={FeatureTwoIcon}
          title="Robust"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <div
        data-aos="fade-out"
        data-aos-delay="800"
        data-aos-anchor-placement="top-bottom"
      >
        <FeatureCard
          icon={FeatureThreeIcon}
          title="Powerful"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  </div>
);

export default Features;
