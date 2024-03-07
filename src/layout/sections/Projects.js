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
          alt='Horizon digital image'
          title='Horizon digital'
          description='In this project I designed and built a new website for the company I work for. I applied skills including good design practices for improved UX, accessibility and SEO optimization as well collaborating with others.'
          tech='WordPress, HTML, CSS, JavaScript'
          url='https://horizondigital.au/'
        />

        <Card
          number='2'
          img={Hiremii}
          alt='Hiremii image'
          title='Hiremii'
          description='In this project I teamed up with two backend developers to create an app for Hiremii. This app was built for the recruitment industry using AI to shortlist potential candidates to make the hiring process more efficient. It was my job to build the designs and collaborate with the team. I was also involved in working with the client directly, discussing designs and best practices.'
          tech='HTML, CSS, Bootstrap, JavaScript, Git bucket'
          url='https://hiremii.com/'
        />

        <Card
          number='3'
          img={Lingnan}
          alt='Lingnan University image'
          title='Lingnan University'
          description='This project involved building a custom WordPress theme from scratch. Once the UI was designed, I had to map out and categorize the required data into taxonomies and custom post types. Once the backend solutions were finalized the frontend was built, the website was optimized for SEO and to meet accessibility standards.'
          url='https://www.ln.edu.hk/cultural/'
        />

        <Card
          number='4'
          img={JobsInCyber}
          alt='Jobs In Cyber image'
          title='Jobs In Cyber'
          description='This task was to give a web application a revamp. Carrying out bug fixes, implementing new features and building new designs. It was great to be a part of such a collaborative process.'
          url='#'
        />

        <Card
          number='5'
          img={FoodieBox}
          alt='FoodieBox image'
          title='My Foodie Box'
          description='This project was to freshen up an existing website by building a new design, also implementing a mobile friendly version.'
          url='https://www.myfoodiebox.com.au/'
        />

        <Card
          number='6'
          img={Enable}
          alt='Enable image'
          title='Enable'
          description='This application needed a landing page, so I designed and built a template for the company to insert their own copy into. Working alone on this project gave me some flexibility to choose my own tech and recourses. For this task I ended up using React / Gatsby for its fast light weight framework.'
          tech='Gatsby, React, Bootstrap, SCSS'
          url='http://enable-app-landing-site.s3-website-ap-southeast-2.amazonaws.com/'
        />
      </div>
    </div>
  );
}

export default Portfolio;
