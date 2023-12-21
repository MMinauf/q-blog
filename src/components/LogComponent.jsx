import React from 'react';

const LogComponent = ({ componentName }) => {
  React.useEffect(() => {
    console.log(`Hello from ${componentName}`);
  }, [componentName]);

  return null;
};

export default LogComponent;
