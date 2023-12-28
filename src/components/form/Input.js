import * as React from 'react';

function Input({ label, id, error, ...props }) {
  return (
    <div className='control__group'>
      <label htmlFor={id}>{label}:</label>
      <input id={id} {...props} />
      <div className='control__group--error'>{error && <p>{error}</p>}</div>
    </div>
  );
}

export default Input;
