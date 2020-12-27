import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import pkg from '../package.json';

Sentry.init({
  dsn:
    'https://d818eead91ee42fdb82bb41b0b8b9d54@o496727.ingest.sentry.io/5571838',
  autoSessionTracking: true,
  release: `${pkg.name}@${pkg.version}`,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Sentry.ErrorBoundary fallback="An error has occurred">
    <App />
  </Sentry.ErrorBoundary>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
