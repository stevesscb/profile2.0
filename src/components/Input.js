import * as React from 'react';

function Input({ id, placeholder, type, label }) {
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input required type={type} placeholder={placeholder} />
    </>
  );
}

export default Input;
