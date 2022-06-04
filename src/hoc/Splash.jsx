import { useState } from 'react';

const Splash = (Component) => {
  const HOC = (props) => {
    const [loading, setLoading] = useState(true);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        {loading && (
          <div className="w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900">
            Loading...
          </div>
        )}
        <Component {...props} setLoading={setLoadingState} />
      </>
    );
  };

  return HOC;
};

export default Splash;
