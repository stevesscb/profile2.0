import * as React from 'react';

import ScrollingTextBanner from '../components/scrollingText/Scrolling-text-banner';

function Hero() {
  return (
    <div className='hero'>
      <span className='hero__title text-center'>
        <span>My passion is to</span>
        <span>build</span>
        <span>optimize</span>
        <span>deliver</span>
      </span>
      <ScrollingTextBanner
        content='responsive designs'
        icon='&#x2022;'
        className='hero__scrolling--content-1'
      />

      <ScrollingTextBanner
        content='websites and applications'
        icon='&#x2022;'
        className='hero__scrolling--content-2'
      />

      <ScrollingTextBanner
        content='expanding skills and technologies'
        icon='&#x2022;'
        className='hero__scrolling--content-1'
      />
    </div>
  );
}

export default Hero;
