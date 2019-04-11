import React from 'react';
import './Page.css';

const Page = ({ title }) =>
  <div className="intro-header">
    <div className="container">
      <div className="intro-message">
        <h1>{title}</h1>
      </div>
    </div>
  </div>;

export default Page;
