import * as React from 'react';
import { useState } from 'react';
// import scrollTo from 'gatsby-plugin-smoothscroll';

import ContactForm from '../../components/form/ContactForm';
import ContactLinks from '../../components/contactLink/Contact-links';

// Images
import PaperPlane from '../../images/paper-plane.png';

function Contact() {
  const [displayForm, setDisplayForm] = useState(true);

  function handleFormSubmit() {
    setDisplayForm(false);
  }

  return (
    <div className='contact'>
      <div className='contact__left'>
        <div className='contact__left--heading'>
          <img
            src={PaperPlane}
            alt='Contact icon'
            className='contact__left--icon'
          />
          <h4>Contact me</h4>
        </div>
        <ContactLinks />
      </div>
      <div className='contact__right'>
        {displayForm ? (
          <ContactForm submitted={handleFormSubmit} />
        ) : (
          <div className='submit-container'>
            <p className='submit-message'>
              Thank you, I'll get back to you shortly.
            </p>
            {/* <button onClick={() => scrollTo('#top')}>Back to top &uarr;</button> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
