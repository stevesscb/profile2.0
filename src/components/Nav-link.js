import * as React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

function NavLink({ link, label }) {
  return (
    <li className='nav__item'>
      <button className='nav__link' onClick={() => scrollTo(`${link}`)}>
        {label}
      </button>
    </li>
  );
}

export default NavLink;
