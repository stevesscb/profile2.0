import * as React from 'react';

// Images
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
import Scrum from '../../images/scrum.png';

function Icons() {
  return (
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
        <p>jQuery</p>
      </span>
      <span>
        <img src={Sass} alt='Sass icon' />
        <p>SCSS</p>
      </span>
      <span>
        <img src={Tailwind} alt='Bootstrap icon' />
        <p>Tailwind</p>
      </span>
      <span>
        <img src={Bootstrap} alt='Tailwind icon' />
        <p>Bootstrap</p>
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
  );
}

export default Icons;
