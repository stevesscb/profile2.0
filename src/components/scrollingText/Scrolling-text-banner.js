import * as React from 'react';
import ScrollingTextContent from './Scrolling-text-content';

function ScrollingTextBanner({ content, className, icon }) {
  return (
    <div className='header__scrolling'>
      <div className={`header__scrolling--content ${className}`}>
        <ScrollingTextContent content={content} icon={icon} />
        <ScrollingTextContent content={content} icon={icon} />
        <ScrollingTextContent content={content} icon={icon} />
        <ScrollingTextContent content={content} icon={icon} />
        <ScrollingTextContent content={content} icon={icon} />
      </div>
      <div className={`header__scrolling--content ${className}`}>
        <ScrollingTextContent content={content} icon={icon} />
        <ScrollingTextContent content={content} icon={icon} />
        <ScrollingTextContent content={content} icon={icon} />
        <ScrollingTextContent content={content} icon={icon} />
        <ScrollingTextContent content={content} icon={icon} />
      </div>
    </div>
  );
}

export default ScrollingTextBanner;
