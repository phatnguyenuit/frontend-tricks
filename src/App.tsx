import React from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Loading from 'components/Loading';
import useLocalStorage from 'hooks/useLocalStorage';
import theme from 'theme';

import logo from './logo.svg';
import './App.css';

type PageProps = {
  name: string;
  component: ReactLazyComponent;
};

const pages: Record<string, PageProps> = {
  foo: {
    component: React.lazy(() => import('pages/Foo')),
    name: 'Foo Component',
  },
  table: {
    component: React.lazy(() => import('pages/Table')),
    name: 'Table Component',
  },
};

const App: React.FC = () => {
  const [lastPage, setLastPage] = useLocalStorage('page', 'foo');
  const [page, setPage] = React.useState(lastPage);
  const onChangePage = React.useCallback(
    (
      e: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
      }>,
    ) => {
      const value = String(e.target.value);
      setPage(value);
      setLastPage(value);
    },
    [setLastPage],
  );
  const Page = pages[page]['component'];
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="App-logo" alt="logo" />
            Learn React!
          </a>
        </header>
        <main className="App-content">
          <Grid container spacing={1} alignItems="center">
            <Grid item>Choose page to show:</Grid>
            <Grid item>
              <MuiSelect
                value={page}
                onChange={onChangePage}
                variant="standard"
              >
                {Object.entries(pages).map(([key, pageProps]) => (
                  <MenuItem key={key} value={key}>
                    {pageProps.name}
                  </MenuItem>
                ))}
              </MuiSelect>
            </Grid>
          </Grid>
          <React.Suspense fallback={<Loading />}>
            <Box mt={2}>
              <Page />
            </Box>
          </React.Suspense>
        </main>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
