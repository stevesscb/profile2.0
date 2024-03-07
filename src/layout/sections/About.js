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
            Steve,
          </div>
          <p>
            I'm a front end developer - I help bring ideas to life by building
            designs that clients can proudly stand behind. I enjoy learning new
            technologies and expanding my skill-set. I'm constantly spending my
            time researching for more efficient and updated methods.
          </p>
          <p>
            While my main experience lies in code, I also have a strong interest
            in design.
          </p>
          <p>
            If you like what you hear and think we could collaborate please
            <button
              onClick={() => scrollTo('.contact')}
              className='about__left--link'
            >
              &nbsp;get in touch.
            </button>
          </p>
        </div>
        <div className='about__right'>
          {/* <h3>Perfecting the build process with, but not limited to...</h3> */}
          <Icons />
        </div>
      </div>
    </>
  );
}

export default About;
