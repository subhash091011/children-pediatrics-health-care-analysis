// /src/components/NavigationBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ sections }) => {
  return (
    <nav className="navigation-bar">
      {sections.map((section) => (
        <Link key={section.id} to={section.path}>
          {section.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavigationBar;
