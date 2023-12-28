import * as React from 'react';
import { useEffect } from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

function NavLink({ link, label }) {
  useEffect(() => {
    const links = document.querySelectorAll('.nav__link');

    if (links.length) {
      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          links.forEach((link) => {
            link.classList.remove('active');
          });
          e.preventDefault();
          link.classList.add('active');
        });
      });
    }
  }, []);

  return (
    <li className='nav__item'>
      <button className='nav__link' onClick={() => scrollTo(`${link}`)}>
        {label}
      </button>
    </li>
  );
}

export default NavLink;
