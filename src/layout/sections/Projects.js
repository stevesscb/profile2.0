import * as React from 'react';

import Card from '../../components/Card';

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
        <h4>My Work</h4>
        <h5>Projects</h5>
      </div>
      <div className='projects__cards'>
        <Card
          number='1'
          img={HorizonDigital}
          alt='Horizon digital image'
          title='Horizon digital'
          description='For this project I was faced with the challenge of designing and building a new website for the company I work for.
                I learnt a lot of valuable skills including best design practices for improved UX experience and accessibility standards.
                It was rewarding to see the final product go live.'
          tech='WordPress, HTML, CSS, JavaScript'
          url='https://horizondigital.au/'
        />

        <Card
          number='2'
          img={JobsInCyber}
          alt='Jobs In Cyber image'
          title='Jobs In Cyber'
          description='This task was to give an existing web application a revamp carrying out bug fixes, implementing new features and building new designs. It was great to be a part of such a collaborative process.'
        />

        <Card
          number='3'
          img={Lingnan}
          alt='Lingnan University image'
          title='Lingnan University'
          description='During my time working as an intern in a web agency in Hong Kong I had the opportunity to work on
                a complete custom WordPress theme build. Once the UI was designed I had to map out exactly what data would be required and then categorize this into taxonomies and custom post types. Once we were happy with the backend solution I then moved into development where I gained valuable experience in writing clean, efficient code, producing my first ever professional website.'
          tech='SCSS, jQuery, React, PHP, HTML'
          url='https://www.ln.edu.hk/cultural/'
        />

        <Card
          number='4'
          img={Hiremii}
          alt='Hiremii image'
          title='Hiremii'
          description='In this project I teamed up with two backend developers to create an app for Hiremii. This app was built for the
                recruitment industry using AI to shortlist potential candidates to make the hiring process more efficient. It was my job to build the designs and collaborate with the team. I was also involved in dealing with the client directly, discussing designs and best practices. I gained skills in communication and learnt the importance of git flow.'
          tech='HTML, CSS, Bootstrap, JavaScript, Git bucket'
          url='https://hiremii.com/'
        />

        <Card
          number='5'
          img={Enable}
          alt='Enable image'
          title='Enable'
          description='This application needed a landing page, so I designed and built a template for the company to insert their own copy into. Working alone on this project gave me some flexibility to choose my own tech and recourses. For this task I ended up using Gatsby for its fast light weight framework. I enjoy using React in projects as I find the approach of breaking down code into small reusable components efficient and clean.'
          tech='Gatsby, React, Bootstrap, SCSS'
          url='http://enable-app-landing-site.s3-website-ap-southeast-2.amazonaws.com/'
        />

        <Card
          number='6'
          img={FoodieBox}
          alt='FoodieBox image'
          title='My Foodie Box'
          description='This project was to freshen up an existing website by building a new design and also implementing a mobile friendly version.'
          url='https://www.myfoodiebox.com.au/'
        />
      </div>
    </div>
  );
}

export default Portfolio;
