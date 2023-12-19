import * as React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__brand'>
        <h2>Stephen Cole Bowen</h2>
        <h3>Front end developer</h3>
      </div>
      <ul className='nav'>
        <li className='nav__item'>
          <button className='nav__link' onClick={() => scrollTo('#top')}>
            Home
          </button>
        </li>
        <li className='nav__item'>
          <button className='nav__link' onClick={() => scrollTo('.about')}>
            About me
          </button>
        </li>
        <li className='nav__item'>
          <button className='nav__link' onClick={() => scrollTo('.projects')}>
            Projects
          </button>
        </li>
        <li className='nav__item'>
          <button className='nav__link' onClick={() => scrollTo('.contact')}>
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
