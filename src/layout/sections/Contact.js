import * as React from 'react';

import LinkedIn from '../../images/linkedin.svg';
import Gmail from '../../images/gmail.svg';
import Github from '../../images/githubbw.svg';
import PaperPlane from '../../images/paper-plane.png';

function Portfolio() {
  return (
    <div className='contact'>
      <div className='contact__heading'>
        <img
          src={PaperPlane}
          alt='Contact icon'
          className='contact__heading--icon'
        />
        <h4>Contact me</h4>
      </div>
      <div className='form__container'>
        <form action='' className='contact__form'>
          <label htmlFor=''>Name:</label>
          <input type='text' placeholder='first name' />
          <label htmlFor=''>Email address:</label>
          <input type='email' placeholder='example@gmail.com' />
          <label htmlFor=''>Message:</label>
          <textarea placeholder='Write your message here' />
          <button className='btn'>Submit</button>
        </form>
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
            <a href='mailto:stevesscb@gmail.com' className='link'>
              <img src={Gmail} alt='Email icon' />
              <p>Email</p>
            </a>
          </li>
          <li className='contact__links--item'>
            <a
              href='https://github.com/stevesscb'
              target='blank'
              className='link'
            >
              <img src={Github} alt='Github icon' />
              <p>Github</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
