import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import NavBarWrapper from './NavBarWrapper';

const location = window.location;
const baseUrl = /\/$/g.test(location.pathname) ? '' : '/';

const items = [
  { "active": false, "label": "Tally", "href": `${baseUrl}tally` },
  { "active": false, "label": "404", "href": `${baseUrl}404` }
];

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => <NavBarWrapper title="Micro Frontends" items={items} />,
  domElementGetter,
});

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];

function domElementGetter() {
  // This is where single-spa will mount our application
  return document.getElementById("navBar");
}