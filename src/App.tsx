import React from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import useLocalStorage from 'hooks/useLocalStorage';
import theme from 'theme';
import PAGES from 'constants/pages';

import Loading from 'components/Loading';
import CustomSelect, { BaseItem } from 'components/CustomSelect';

import logo from './logo.svg';
import './App.css';

interface PageItem extends BaseItem {
  component: ReactLazyComponent;
}

const pages: Array<PageItem> = Object.keys(PAGES).map((key) => ({
  value: key,
  label: PAGES[key].name,
  component: PAGES[key].component,
}));

const DEFAULT_PAGE = pages[0];

const App: React.FC = () => {
  const [lastPage, setLastPage] = useLocalStorage('page', DEFAULT_PAGE.value);
  const lastPageItem = React.useMemo(() => {
    return pages.find((page) => page.value === lastPage);
  }, [lastPage]);
  const [page, setPage] = React.useState(lastPageItem);
  const onChangePage = React.useCallback(
    (selected: PageItem) => {
      setPage(selected);
      setLastPage(String(selected.value));
    },
    [setPage, setLastPage],
  );
  const Page = (page || DEFAULT_PAGE).component;
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
            <Grid item xs="auto">Choose page to show:</Grid>
            <Grid item xs sm={6} md={2}>
              <CustomSelect
                defaultTitle="Choose Page"
                selection={pages}
                selectedItem={page}
                onChange={onChangePage}
              />
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
