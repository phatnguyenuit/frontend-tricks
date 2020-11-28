import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CustomSelect, {
  CustomMultipleSelect,
  BaseItem,
} from 'components/CustomSelect';

type Gender = 'male' | 'female';

interface Person {
  id: number;
  name: string;
  gender: Gender;
}

interface MyItem extends BaseItem {
  gender: Gender;
}

const people: Array<Person> = [
  {
    id: 1,
    name: 'Nguyen Tan Phat',
    gender: 'male',
  },
  {
    id: 2,
    name: 'Nguyen Tan Tai',
    gender: 'male',
  },
  {
    id: 3,
    name: 'Nguyen Thi Gai',
    gender: 'female',
  },
];

const selection: Array<MyItem> = people.map(({ id, name, gender }) => ({
  gender,
  label: name,
  value: id,
}));

const CustomSelectPage = () => {
  return (
    <div>
      <Typography variant="h5">CustomSelect Page</Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <Grid container direction="column">
            <Grid item>CustomSelect with single value</Grid>
            <Grid item>
              <Box maxWidth={200}>
                <CustomSelect
                  selection={selection}
                  defaultTitle="Choose person"
                  onChange={(selected) =>
                    // eslint-disable-next-line no-console
                    console.log('[CustomSelect]', selected)
                  }
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container direction="column">
            <Grid item>CustomMultipleSelect with multiple values</Grid>
            <Grid item>
              <Box maxWidth={300}>
                <CustomMultipleSelect
                  selection={selection}
                  defaultTitle="Choose person"
                  onChange={(selected) =>
                    // eslint-disable-next-line no-console
                    console.log('[CustomMultipleSelect]', selected)
                  }
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomSelectPage;
