import * as React from 'react';

import Html from '../../images/html5.svg';
import Css from '../../images/css3.svg';
import Js from '../../images/javascript.svg';
import Jquery from '../../images/jquery.svg';
import Sass from '../../images/sass.svg';
import Tailwind from '../../images/tailwind.svg';

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
          Perfecting the build process with, but not limited to...
        </h3>
        <div className='icons'>
          <span>
            <img src={Html} alt='Html icon' />
            <p>HTML5</p>
          </span>
          <span>
            <img src={Css} alt='Css icon' />
            <p>CSS3</p>
          </span>
          <span>
            <img src={Js} alt='Javascript icon' />
            <p>JavaScript</p>
          </span>
          <span>
            <img src={Jquery} alt='Jquery icon' />
            <p>jquery</p>
          </span>
          <span>
            <img src={Sass} alt='Sass icon' />
            <p>SCSS</p>
          </span>
          <span>
            <img src={Bootstrap} alt='Bootstrap icon' />
            <p>Bootstrap</p>
          </span>
          <span>
            <img src={Tailwind} alt='Tailwind icon' />
            <p>Tailwind</p>
          </span>
          <span>
            <img src={ReactSvg} alt='React icon' />
            <p>React</p>
          </span>
          <span>
            <img src={Vite} alt='Vite icon' />
            <p>Vite</p>
          </span>
          <span>
            <img src={Next} alt='Next icon' />
            <p>NextJs</p>
          </span>
          <span>
            <img src={Gatsby} alt='Gatsby icon' />
            <p>Gatsby</p>
          </span>
          <span>
            <img src={Redux} alt='Redux icon' />
            <p>Redux</p>
          </span>
          <span>
            <img src={Github} alt='Github icon' />
            <p>Github</p>
          </span>
          <span>
            <img src={Gitlab} alt='Gitlab icon' />
            <p>Gitlab</p>
          </span>
          <span>
            <img src={Scrum} alt='Scrum icon' />
            <p>Scrum</p>
          </span>
          <span>
            <img src={Wordpress} alt='Wordpress icon' />
            <p>WordPress</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
