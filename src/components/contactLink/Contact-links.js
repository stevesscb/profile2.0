import * as React from 'react';

// Images
import LinkedIn from '../../images/linkedin.svg';
import Gmail from '../../images/gmail.svg';
import Github from '../../images/githubbw.svg';

function ContactLinks() {
  return (
    <ul className='contact__links'>
      <li className='contact__links--item'>
        <a
          href='https://www.linkedin.com/in/stephen-cole-bowen/'
          target='blank'
          className='link'
        >
          <img src={LinkedIn} alt='LinkedIn icon' />
          <p>LinkedIn</p>
        </a>
      </li>
      <li className='contact__links--item'>
        <a href='mailto:beast_feud0f@icloud.com' className='link'>
          <img src={Gmail} alt='Email icon' />
          <p>Email</p>
        </a>
      </li>
      <li className='contact__links--item'>
        <a href='https://github.com/stevesscb' target='blank' className='link'>
          <img src={Github} alt='Github icon' />
          <p>Github</p>
        </a>
      </li>
    </ul>
  );
}

export default ContactLinks;
