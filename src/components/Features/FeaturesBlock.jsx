import FeatureCard from './FeatureCard';
import FeatureOneIcon from '../Icons/FeatureOneIcon';
import FeatureThreeIcon from '../Icons/FeatureThreeIcon';
import FeatureTwoIcon from '../Icons/FeatureTwoIcon';

const FeaturesBlock = () => (
  <div className="sm:py-6">
    <div className="px-8 mx-auto max-w-6xl py-10 sm:py-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      <FeatureCard
        icon={FeatureOneIcon}
        title="Initial Contact"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <FeatureCard
        icon={FeatureTwoIcon}
        title="Discovery Session"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <FeatureCard
        icon={FeatureThreeIcon}
        title="Contracting"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  </div>
);

export default FeaturesBlock;
