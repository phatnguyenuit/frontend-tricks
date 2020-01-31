import React from 'react';
import MuiTableCell from '@material-ui/core/TableCell';
import MuiTableRow from '@material-ui/core/TableRow';
import { ColumnOptionsList, ColumnOptions } from './index';

export function renderBody<TRecord>(
  data: Array<TRecord>,
  columns: ColumnOptionsList<TRecord>,
) {
  return data.map((record, index) =>
    renderRow(`tr-${index}`, columns, record, index),
  );
}

export function renderRow<TRecord>(
  rowKey: React.Key,
  columns: ColumnOptionsList<TRecord>,
  record: TRecord,
  index: number,
) {
  return (
    <MuiTableRow key={rowKey}>
      {columns.map(
        ({ renderCellContent, key: columnKey }: ColumnOptions<TRecord>) => {
          const content = renderCellContent
            ? renderCellContent(record, index)
            : record[columnKey as keyof TRecord];
          return renderCell(`td-${rowKey}-${columnKey}`, content);
        },
      )}
    </MuiTableRow>
  );
}

export function renderHeader<TRecord>(columns: ColumnOptionsList<TRecord>) {
  return columns.map(({ key, name, renderHeaderContent }) => {
    const cellContent = renderHeaderContent ? renderHeaderContent() : name;
    return renderCell(`th-${key}`, cellContent);
  });
}

export function renderCell(key: React.Key, content: React.ReactNode) {
  return <MuiTableCell key={key}>{content}</MuiTableCell>;
}
