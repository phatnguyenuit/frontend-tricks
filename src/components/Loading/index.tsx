import React from 'react';
import useStyles from './styles';

export const LoadingCompoent = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.loadingContainer}>
        <div className={classes.loader}></div>
      </div>
    </div>
  );
};

const Loading = React.memo(LoadingCompoent);
Loading.displayName = 'Loading';

export default Loading;
