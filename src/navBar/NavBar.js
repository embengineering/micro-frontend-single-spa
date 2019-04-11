import React from 'react';
import NavBarItem from './NavBarItem';
import {navigateToUrl} from 'single-spa';

const NavBar = ({
  title,
  items = []
}) =>
  <nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <a className="navbar-brand" href="/" onClick={navigateToUrl}>{title}</a>
    <div className="navbar-collapse">
      <ul className="navbar-nav mr-auto">
        {
          items.map((item, index) => <NavBarItem key={index} {...item} />)
        }
      </ul>
    </div>
  </nav>;

export default NavBar;