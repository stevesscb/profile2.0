import * as React from 'react';

import './wrapper.scss';

function Wrapper({ children }) {
  return <div className='wrapper'>{children}</div>;
}

export default Wrapper;
