import React from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import MuiSelect from '@material-ui/core/Select';
import Loading from 'components/Loading';
import useLocalStorage from 'hooks/useLocalStorage';
import theme from 'theme';
import pages from 'constants/pages';

import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const { storedValue: lastPage, setValue: setLastPage } = useLocalStorage(
    'page',
    'foo',
  );
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
      <CssBaseline />
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
