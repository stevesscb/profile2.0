import * as React from 'react';
import { useState, useRef } from 'react';

// import emailjs from '@emailjs/browser';

import Button from '../button/Button';
import Input from './Input';

function ContactForm({ submitted }) {
  const form = useRef();

  const [enteredValues, setEnteredValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [didEdit, setDidEdit] = useState({
    name: false,
    email: false,
    message: false,
  });

  const nameIsInvalid = didEdit.name && enteredValues.name.trim() === '';

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  const messageIsInvalid =
    didEdit.message && enteredValues.message.trim() === '';

  const formIsInvalid =
    enteredValues.name.trim() === '' ||
    !enteredValues.email.includes('@') ||
    enteredValues.message.trim() === '';

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // // Validation
    if (formIsInvalid) {
      return;
    } else {
      submitted();
      // Send form data
      // TODO Uncomment this code before production
      // emailjs
      //   .sendForm(
      //     'service_hngouyh',
      //     'template_0ibridr',
      //     form.current,
      //     'RJbHKRxlmAf_iEb4D'
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //       console.log('form submitted');
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className='form'>
      <Input
        label='Name'
        id='name'
        name='user_name'
        type='text'
        placeholder='Your name'
        onBlur={() => handleInputBlur('name')}
        onChange={(e) => handleInputChange('name', e.target.value)}
        error={nameIsInvalid && 'Please enter your name'}
      />

      <Input
        label='Email address'
        id='email'
        name='user_email'
        type='email'
        placeholder='example@gmail.com'
        onBlur={() => handleInputBlur('email')}
        onChange={(e) => handleInputChange('email', e.target.value)}
        error={emailIsInvalid && 'Please enter a valid email address'}
      />

      <div className='control__group'>
        <label htmlFor='message'>Message:</label>
        <textarea
          id='message'
          name='message'
          placeholder='Write your message here'
          onChange={(e) => handleInputChange('message', e.target.value)}
          onBlur={() => handleInputBlur('message')}
        />
        <div className='control__group--error'>
          {messageIsInvalid && <p>Please leave a message.</p>}
        </div>
      </div>
      <Button type='submit' disabled={formIsInvalid} />
    </form>
  );
}

export default ContactForm;
