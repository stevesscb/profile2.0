import * as React from 'react';

function ScrollingText({ content, className }) {
  return (
    <div className='header__scrolling'>
      <div className={`header__scrolling--text ${className}`}>
        <span> {content} &#x2022;</span>
        <span> {content} &#x2022;</span>
        <span> {content} &#x2022;</span>
        <span> {content} &#x2022;</span>
        <span> {content} &#x2022;</span>
      </div>
      <div className={`header__scrolling--text ${className}`}>
        <span> {content} &#x2022;</span>
        <span> {content} &#x2022;</span>
        <span> {content} &#x2022;</span>
        <span> {content} &#x2022;</span>
        <span> {content} &#x2022;</span>
      </div>
    </div>
  );
}

export default ScrollingText;
