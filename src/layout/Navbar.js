import * as React from 'react';
import { useState } from 'react';

import NavLink from '../components/navLink/NavLink';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu((prev) => (prev === true ? false : true));
  }

  return (
    <div className='navbar'>
      <div className='navbar__brand'>
        <h2>Stephen Cole Bowen</h2>
        <h3>Front end developer</h3>
      </div>
      <div
        className='navigation__button'
        onClick={handleMenu}
        role='button'
        onKeyDown={handleMenu}
        tabIndex={0}
        aria-label='Open mobile navigation'
      >
        <span
          className={`navigation__icon + ${openMenu ? 'checked' : null}`}
        ></span>
      </div>
      <ul className={`nav ${openMenu ? 'open' : 'close'}`}>
        <NavLink label='Home' link='#top' />
        <NavLink label='About me' link='.about' />
        <NavLink label='Projects' link='.projects' />
        <NavLink label='Contact' link='.contact' />
      </ul>
    </div>
  );
}

export default Navbar;
