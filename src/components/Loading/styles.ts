import { Theme, createStyles, makeStyles } from '@material-ui/core';

export const styles = (theme: Theme) =>
  createStyles({
    loadingContainer: {
      left: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
    loader: {
      border: '3px solid #cfd2d4',
      borderRadius: '50%',
      borderTop: `3px solid ${theme.palette.primary.main}`,
      width: '64px',
      height: '64px',
      animation: '$spin 2s linear infinite',
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(1turn)' },
    },
  });

export default makeStyles(styles, { classNamePrefix: 'Loading' });
