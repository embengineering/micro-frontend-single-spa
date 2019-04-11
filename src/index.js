import './index.css';
import * as serviceWorker from './serviceWorker';
import {registerApplication, start} from 'single-spa';

registerApplication(
  'tally',
  () => import('./tally/tally.app.js'),
  () => true
);

registerApplication(
  'navBar',
  () => import('./navBar/navBar.app.js'),
  () => true
);

start();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
