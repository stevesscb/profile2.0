import * as React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

import Icons from '../../components/icons/Icons';

function About() {
  return (
    <>
      <div className='about'>
        <div className='about__left'>
          <h2>About me</h2>
          <div className='about__left--standout-text'>
            <span className='about__left--emoticon'>✌️</span> Hi there! I'm
            "name"
          </div>
          <p>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
          <p>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
          <p>
            simply dummy text of the printing and typesetting industry. Ipsum
            <button
              onClick={() => scrollTo('.contact')}
              className='about__left--link'
            >
              &nbsp;get in touch.
            </button>
          </p>
        </div>
        <div className='about__right'>
          <Icons />
        </div>
      </div>
    </>
  );
}

export default About;
