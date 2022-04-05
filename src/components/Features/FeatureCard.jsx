const FeatureCard = ({ icon: Icon, title: Title, content: Content }) => {
  return (
    <div className="card relative flex flex-col items-center bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <Icon />
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
          {Title}
        </h4>
        <p className="text-gray-500 text-center">
          {Content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
