import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import TallyWrapper from './tally/TallyWrapper';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: TallyWrapper,
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
  return document.getElementById("root");
}