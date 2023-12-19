import * as React from 'react';
import { Link } from 'gatsby';

import Icons from '../../components/Icons';

function About() {
  return (
    <div className='about'>
      <div className='about__left'>
        <h3 className='heading'>
          <span className='emoticon'>✌️</span> Hi there! I'm Steve,
        </h3>
        <p>
          A front end developer - I bring ideas to life by building designs with
          the clear vision of handing over a final product that startups and
          business's can proudly stand behind.
        </p>
        <p>
          Although my main experience lies in code, I have a strong interest in
          design and love learning more in this space.
        </p>
        <p>
          I value clean code - less is more! I also love learning new
          technologies and expanding my skill set, spending time researching for
          more efficient and updated methods.
        </p>
        <p>
          If you like what you hear and you think we could collaborate please
          <Link to='#contact' className='about__link'>
            &nbsp;get in touch.
          </Link>
        </p>
      </div>
      <div className='about__right'>
        <h3 className='heading'>
          Perfecting the build process with, but not limited to...
        </h3>
        <Icons />
      </div>
    </div>
  );
}

export default About;
