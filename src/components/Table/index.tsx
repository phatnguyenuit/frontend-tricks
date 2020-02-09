import React from 'react';
import MuiTable, { TableProps as MuiTableProps } from '@material-ui/core/Table';
import MuiTableRow from '@material-ui/core/TableRow';
import MuiTableHead, {
  TableHeadProps as MuiTableHeadProps,
} from '@material-ui/core/TableHead';
import MuiTableBody from '@material-ui/core/TableBody';
import { TableCellProps } from '@material-ui/core/TableCell';

import { renderHeader, renderBody } from './utils';

export function TableComponent<TRecord>(props: TableProps<TRecord>) {
  const { data, columns, tableProps, tableHeadProps } = props;
  return (
    <MuiTable {...tableProps}>
      <MuiTableHead {...tableHeadProps}>
        <MuiTableRow>{renderHeader(columns)}</MuiTableRow>
      </MuiTableHead>
      <MuiTableBody>{renderBody(data, columns)}</MuiTableBody>
    </MuiTable>
  );
}

const Table = React.memo(TableComponent) as typeof TableComponent &
  React.ComponentType<any>;
Table.displayName = 'Table';

export default Table;

export interface TableProps<TRecord> {
  data: Array<TRecord>;
  columns: ColumnOptionsList<TRecord>;
  tableProps?: ExcludeChildren<MuiTableProps>;
  tableHeadProps?: ExcludeChildren<MuiTableHeadProps>;
}

export interface ColumnOptions<TRecord> {
  key: keyof TRecord | string;
  name: React.ReactNode;
  cellProps?: Partial<TableCellProps>;
  cellHeadProps?: Partial<TableCellProps>;
  renderCellContent?: ColumnRenderer<TRecord>;
  renderHeaderContent?: HeaderRenderer;
}

export type ColumnOptionsList<TRecord> = Array<ColumnOptions<TRecord>>;
export type ColumnRenderer<TRecord> = (
  record: TRecord,
  index: number,
) => React.ReactNode;
export type HeaderRenderer = () => React.ReactNode;
