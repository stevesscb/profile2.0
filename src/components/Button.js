import * as React from 'react';

function Button({ type }) {
  return (
    <button type={type} className='btn'>
      Submit
    </button>
  );
}

export default Button;
