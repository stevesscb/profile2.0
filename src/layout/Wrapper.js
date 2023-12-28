import * as React from 'react';

function Wrapper({ children }) {
  return (
    <div id='top' className='wrapper'>
      {children}
    </div>
  );
}

export default Wrapper;
