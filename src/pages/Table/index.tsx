import React from 'react';
import Typography from '@material-ui/core/Typography';
import Table, { ColumnOptionsList } from 'components/Table';
import MuiTableContainer from '@material-ui/core/TableContainer';
import MuiPaper from '@material-ui/core/Paper';

type Gender = 'female' | 'male';

interface TRecord {
  id: number;
  name: string;
  gender: Gender;
}

const genderMapping: Record<Gender, string> = {
  male: '💪',
  female: '💅',
};

const columns: ColumnOptionsList<TRecord> = [
  {
    key: 'stt',
    name: 'STT',
    renderCellContent: (record, index) => index + 1,
  },
  { key: 'name', name: 'Name' },
  {
    key: 'gender',
    name: 'Gender',
    renderCellContent: (record) => genderMapping[record.gender],
  },
];

const data: Array<TRecord> = [
  { id: 1, name: 'Nguyen Tan Phat', gender: 'male' },
  { id: 2, name: 'Nguyen Tan Tai', gender: 'male' },
  { id: 2, name: 'Nguyen Thi Gai', gender: 'female' },
];

const TablePage = () => {
  return (
    <div>
      <Typography variant="h5">Table Page</Typography>
      <MuiTableContainer component={MuiPaper}>
        <Table columns={columns} data={data} />
      </MuiTableContainer>
    </div>
  );
};

export default TablePage;
