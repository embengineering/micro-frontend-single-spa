import React from 'react';
import {navigateToUrl} from 'single-spa';

const NavBarItem = ({
  active,
  label,
  href
}) => {
  const activeClass = active ? 'active' : '';

  return <li className={`nav-item ${activeClass}`}>
    <a className="nav-link" href={href} onClick={navigateToUrl}>{label}</a>
  </li>
};

export default NavBarItem;