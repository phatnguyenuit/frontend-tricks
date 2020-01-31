import React from 'react';
import Typography from '@material-ui/core/Typography';
import Foo from 'components/Foo';

const FooPage = () => (
  <div>
    <Typography variant="h5">Foo Component</Typography>
    <Foo value={12212} />
    <Foo value={true} />
    <Foo value={undefined} />
    <Foo value={'string'} />
    <Foo value={null} />
  </div>
);
export default FooPage;
