import { StyleRules } from '@material-ui/core';
import { TableCellClassKey } from '@material-ui/core/TableCell';

const MuiTableCell: Partial<StyleRules<TableCellClassKey>> = {
  head: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
};

export default MuiTableCell;
