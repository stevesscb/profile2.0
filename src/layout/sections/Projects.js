import * as React from 'react';

import Card from '../../components/card/Card';

// Images
import HorizonDigital from '../../images/horizon-digital.png';
import JobsInCyber from '../../images/jobs-in-cyber.png';
import Lingnan from '../../images/lingnan.png';
import Hiremii from '../../images/hiremii.png';
import Enable from '../../images/enable.png';
import FoodieBox from '../../images/foodie-box.png';

function Portfolio() {
  return (
    <div className='projects'>
      <div className='projects__header text-center'>
        <h3>My Work</h3>
        <h2>Projects</h2>
      </div>
      <div className='projects__cards'>
        <Card
          number='1'
          img={HorizonDigital}
          alt='image alt text'
          title='Project 1'
          description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          tech='WordPress, HTML, CSS, JavaScript'
          url='#'
        />

        <Card
          number='2'
          img={Hiremii}
          alt='image alt text'
          title='project 2'
          description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          tech='HTML, CSS, Bootstrap, JavaScript, Git bucket'
          url='#'
        />

        <Card
          number='3'
          img={Lingnan}
          alt='image alt text'
          title='project 3'
          description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          url='#'
        />

        <Card
          number='4'
          img={JobsInCyber}
          alt='image alt text'
          title='project 4'
          description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          url='#'
        />

        <Card
          number='5'
          img={FoodieBox}
          alt='image alt text'
          title='project 5'
          description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          url='#'
        />

        <Card
          number='6'
          img={Enable}
          alt='image alt text'
          title='project 6'
          description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          tech='Gatsby, React, Bootstrap, SCSS'
          url='#'
        />
      </div>
    </div>
  );
}

export default Portfolio;
