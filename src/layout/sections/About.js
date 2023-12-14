import * as React from 'react';

import Html from '../../images/html5.svg';
import Css from '../../images/css3.svg';
import Js from '../../images/javascript.svg';
import Jquery from '../../images/jquery.svg';
import Sass from '../../images/sass.svg';
import Tailwind from '../../images/tailwindcss.svg';

import Bootstrap from '../../images/bootstrap.svg';
import ReactSvg from '../../images/react.svg';
import Vite from '../../images/vite.svg';
import Next from '../../images/nextjs.svg';
import Gatsby from '../../images/gatsby.svg';
import Redux from '../../images/redux.svg';

import Github from '../../images/github.svg';
import Gitlab from '../../images/gitlab.svg';
import Wordpress from '../../images/wordpress.svg';
import Scrum from '../../images/scrum.svg';

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
          If you like what you hear and you think we could collaborate please,
          <a href='#' className='about__link'>
            &nbsp;get in touch.
          </a>
        </p>
      </div>
      <div className='about__right'>
        <h3 className='heading'>
          Perfecting the build process but not limited to...
        </h3>
        <div className='icons'>
          <img src={Html} alt='Html icon' />
          <img src={Css} alt='Css icon' />
          <img src={Js} alt='Javascript icon' />
          <img src={Jquery} alt='Jquery icon' />
          <img src={Sass} alt='Sass icon' />
          <img src={Bootstrap} alt='Bootstrap icon' />
          <img src={Tailwind} alt='Tailwind icon' />
          <img src={ReactSvg} alt='React icon' />
          <img src={Vite} alt='Vite icon' />
          <img src={Next} alt='Next icon' />
          <img src={Gatsby} alt='Gatsby icon' />
          <img src={Redux} alt='Redux icon' />
          <img src={Github} alt='Github icon' />
          <img src={Gitlab} alt='Gitlab icon' />
          <img src={Scrum} alt='Scrum icon' />
          <img src={Wordpress} alt='Wordpress icon' />
        </div>
      </div>
    </div>
  );
}

export default About;
