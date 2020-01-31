import React from 'react';
import './styles.css';

export const LoadingCompoent = () => (
  <div>
    <div className="loaderContainer">
      <div className="loader"></div>
    </div>
  </div>
);

const Loading = React.memo(LoadingCompoent);
Loading.displayName = 'Loading';

export default Loading;
