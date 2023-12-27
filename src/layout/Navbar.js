import * as React from 'react';

import NavLink from '../components/navLink/NavLink';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__brand'>
        <h2>Stephen Cole Bowen</h2>
        <h3>Front end developer</h3>
      </div>
      <ul className='nav'>
        <NavLink label='Home' link='#top' />
        <NavLink label='About me' link='.about' />
        <NavLink label='Projects' link='.projects' />
        <NavLink label='Contact' link='.contact' />
      </ul>
    </div>
  );
}

export default Navbar;
