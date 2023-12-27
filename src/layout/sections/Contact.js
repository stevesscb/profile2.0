import * as React from 'react';
import { useState } from 'react';

import ContactForm from '../../components/form/ContactForm';
import SocialLinks from '../../components/socialLink/Social-links';

// Images
import PaperPlane from '../../images/paper-plane.png';

function Contact() {
  const [displayForm, setDisplayForm] = useState(true);

  function handleFormSubmit() {
    setDisplayForm(false);
  }

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
        {displayForm ? (
          <ContactForm submitted={handleFormSubmit} />
        ) : (
          <p className='submit-message'>
            Thankyou, I'll get back to you shortly.
          </p>
        )}

        <SocialLinks />
      </div>
    </div>
  );
}

export default Contact;
