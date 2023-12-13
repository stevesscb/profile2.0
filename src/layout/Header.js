import * as React from 'react';

import ScrollingText from '../components/scrollingText';

function Header() {
  return (
    <div className='header'>
      <h1 className='header__title'>
        <span>My passion is to</span>
        <span>build</span>
        <span>optimize</span>
        <span>deliver</span>
      </h1>
      <span className='header__background--text'>***</span>
      <ScrollingText
        content='Websites and applications'
        className='header__scrolling--text-1'
      />

      <ScrollingText
        content='Websites and applications'
        className='header__scrolling--text-2'
      />

      <ScrollingText
        content='Websites and applications'
        className='header__scrolling--text-1'
      />
    </div>
  );
}

export default Header;
