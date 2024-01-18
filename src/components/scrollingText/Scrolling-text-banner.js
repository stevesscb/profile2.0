import * as React from 'react';
import ScrollingTextContent from './Scrolling-text-content';

function ScrollingTextBanner({ content, className, icon }) {
  return (
    <div className='hero__scrolling'>
      <div className={`hero__scrolling--content ${className}`}>
        <ScrollingTextContent content={content} icon={icon} />
        <ScrollingTextContent content={content} icon={icon} />
        <ScrollingTextContent content={content} icon={icon} />
        <ScrollingTextContent content={content} icon={icon} />
        <ScrollingTextContent content={content} icon={icon} />
      </div>
      <div className={`hero__scrolling--content ${className}`}>
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
