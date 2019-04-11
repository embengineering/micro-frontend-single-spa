import './index.css';
import * as serviceWorker from './serviceWorker';
import {registerApplication, start} from 'single-spa';

const location = window.location;
const baseUrl = /\/$/g.test(location.pathname) ? '/' : location.pathname;

switch(location.pathname) {
  case '/tally':
    registerApplication(
      'tally',
      () => import('./tally/tally.app.js'),
      () => location => location.pathname.startsWith(`${baseUrl}tally`)
    );
  break;
  default:
    registerApplication(
      'errorPage',
      () => import('./errorPage/errorPage.app.js'),
      () => location => location.pathname.startsWith(`${baseUrl}404`)
    );
  break;
}

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