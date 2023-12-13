import * as React from 'react';

function Header() {
  return (
    <div className='header'>
      <h1 className='header__title'>
        <span>My passion is to</span>
        <span>&#x2022;build&#x2022;</span>
        <span>optimize</span>
        <span>deliver</span>
      </h1>
      <span className='header__background--text'>***</span>
      <div className='animation__text'>websites and applications</div>
    </div>
  );
}

export default Header;
