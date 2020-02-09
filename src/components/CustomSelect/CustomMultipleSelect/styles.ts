import { Theme, createStyles, makeStyles } from '@material-ui/core';

export const styles = (theme: Theme) =>
  createStyles({
    pill: {
      width: '100%',
      backgroundColor: '#cfd2d4',
      borderRadius: theme.spacing(1 / 2),
      display: 'inline-block',
      fontSize: 12,
      fontWeight: 'bold',
      lineHeight: 1.33,
      overflow: 'hidden',
      padding: theme.spacing(1 / 2, 1),
      textAlign: 'center',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '&.pill-primary': {
        backgroundColor: theme.palette.primary.main,
        fontWeight: 'bold',
        color: '#ffffff',
      },
    },
  });

export default makeStyles(styles, { classNamePrefix: 'CustomMultipleSelect' });
