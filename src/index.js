/* eslint-disable no-console */

import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles/';
import CssBaseline from '@material-ui/core/CssBaseline';
import GA4React from 'ga-4-react';

import App from './App';
import * as serviceWorker from './serviceWorker';
import themeMui from './theme-mui';

const ga4react = new GA4React('G-5V7GWWCKF0'); // Google Analytics 4 measurement ID
const theme = createMuiTheme(themeMui);

WebFont.load({
  google: {
    families: ['Work Sans:400,700', 'Source Code Pro:400'],
  },
});

(async _ => {
  await ga4react.initialize()
    .then((res) => console.log(res))
    .catch((err) => console.log(err)) // handle error scenarios such as ad blockers
    .finally(() => {
      ReactDOM.render(
        <React.StrictMode>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </React.StrictMode>,
        document.getElementById('root')
      );
    });
})();

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */

serviceWorker.unregister();
