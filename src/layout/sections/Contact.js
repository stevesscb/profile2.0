import * as React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import SocialLinks from '../../components/Social-links';

// Images
import PaperPlane from '../../images/paper-plane.png';

function Contact() {
  return (
    <div className='contact'>
      <div className='contact__heading text-center'>
        <img
          src={PaperPlane}
          alt='Contact icon'
          className='contact__heading--icon'
        />
        <h4>Contact me</h4>
      </div>
      <div className='form__container'>
        <form action='' className='contact__form'>
          <Input id='name' placeholder='First name' type='text' label='Name' />
          <Input
            id='email'
            placeholder='Email'
            type='email'
            label='Email address'
          />
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            placeholder='Write your message here'
            required
          />
          <Button type='submit' />
        </form>
        <SocialLinks />
      </div>
    </div>
  );
}

export default Contact;
