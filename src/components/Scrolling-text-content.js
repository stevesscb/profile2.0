import * as React from 'react';

function ScrollingTextContent({ icon, content }) {
  console.log(icon, content);

  return (
    <>
      <span>{content}</span>
      <span className='icon'>{icon}</span>
    </>
  );
}

export default ScrollingTextContent;
