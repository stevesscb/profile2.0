import * as React from 'react';

import ScrollingTextBanner from '../components/Scrolling-text-banner';

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>
        <span>My passion is to</span>
        <span>build</span>
        <span>optimize</span>
        <span>deliver</span>
      </h1>
      <span className='header__background--text'>***</span>
      <ScrollingTextBanner
        content='responsive designs'
        icon='&#x2022;'
        className='header__scrolling--content-1'
      />

      <ScrollingTextBanner
        content='websites and applications'
        icon='&#x2022;'
        className='header__scrolling--content-2'
      />

      <ScrollingTextBanner
        content='expanding skills and technologies'
        icon='&#x2022;'
        className='header__scrolling--content-1'
      />
    </header>
  );
}

export default Header;
