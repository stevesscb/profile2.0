import * as React from 'react';

function Button({ type, disabled }) {
  return (
    <button type={type} className='btn' disabled={disabled}>
      Submit
    </button>
  );
}

export default Button;
