import { Theme, createStyles, makeStyles } from '@material-ui/core';

export const styles = (theme: Theme) =>
  createStyles({
    selectWrapper: {
      position: 'relative',
      userSelect: 'none',
      width: '100%',
    },
    selectHeader: {
      backgroundColor: '#f2f3f4',
      border: '1px solid #cfd2d4',
      borderRadius: theme.spacing(1 / 2),
      color: '#3f4b53',
      cursor: 'default',
      height: 40,
      padding: theme.spacing(1, 2),
      position: 'relative',

      '&.no-value': {
        color: '#b7bbbf',
        fontSize: 14,
        lineHeight: 1.29,
        overflow: 'hidden',
      },
    },
    selectHeaderTitle: {
      lineHeight: '24px',
      marginRight: theme.spacing(1 / 2),
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    selectList: {
      backgroundColor: '#ffffff',
      borderRadius: theme.spacing(1 / 2),
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
      fontWeight: 700,
      listStyleType: 'none',
      margin: 0,
      marginTop: theme.spacing(1),
      maxHeight: 300,
      overflowY: 'auto',
      padding: 0,
      position: 'absolute',
      width: '100%',
      zIndex: 10,
    },
    selectListItem: {
      width: '100%',
      fontSize: 14,
      padding: theme.spacing(2),
      lineHeight: 1.29,
      color: '#6f787e',
      cursor: 'default',
      height: '48px',
      backgroundColor: '#ffffff',
      '&:hover': {
        backgroundColor: '#f2f3f4',
      },
      '& > div': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
      '&.selected': {
        color: '#3f4b53',
        backgroundColor: '#f2f3f4',
      },
    },
  });

export default makeStyles(styles, { classNamePrefix: 'CustomSelect' });
