import React from "react";

type WithLoaderProps = {
  loading: boolean;
};

function WithLoader<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  // Return a new component that accepts props T + loading
  const ComponentWithLoader = (props: T & WithLoaderProps) => {
    const { loading, ...restProps } = props;
    if (loading) {
      return <h2 className="text-center text-blue-500 mt-4">Loading...</h2>;
    }
    return <WrappedComponent {...(restProps as T)} />;
  };

  return ComponentWithLoader;
}

export default WithLoader;
