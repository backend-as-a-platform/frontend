import FeatureCard from './FeatureCard';
import FeatureOneIcon from '../Icons/FeatureOneIcon';
import FeatureThreeIcon from '../Icons/FeatureThreeIcon';
import FeatureTwoIcon from '../Icons/FeatureTwoIcon';

const FeaturesBlock = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <div className="py-12 md:py-20">
      <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
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
  </div>
);

export default FeaturesBlock;
