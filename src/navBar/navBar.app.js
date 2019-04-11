import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import NavBarWrapper from './NavBarWrapper';

const items = [
  { "active": false, "label": "Demo", "href": `https://single-spa.js.org/` },
  { "active": false, "label": "Video", "href": `https://youtu.be/L4jqow7NTVg` }
];

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => <NavBarWrapper items={items} />,
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