import * as React from 'react';

import * as classes from './MainNavigation.module.scss';

function MainNavigation() {
  return (
    <div className={classes.MainNavigation}>
      <span>
        <h1>Stephen Cole Bowen</h1>
        <h2>Frontend developer</h2>
      </span>
      <nav>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
