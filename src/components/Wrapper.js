import * as React from 'react';

import * as classes from './Wrapper.module.scss';

function Wrapper({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}

export default Wrapper;
