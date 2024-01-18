import * as React from 'react';
import { StrictMode } from 'react';

import Wrapper from '../layout/Wrapper';

import Navbar from '../layout/Navbar';
import Hero from '../layout/Hero';
import About from '../layout/sections/About';
import Projects from '../layout/sections/Projects';
import Contact from '../layout/sections/Contact';

import '../css/style.css';

export const Head = () => (
  <>
    <html lang='en' />
    <meta
      name='description'
      content='Front end development / Web development professional portfolio'
    />
    <title>Stephen Cole Bowen</title>
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link
      rel='preconnect'
      href='https://fonts.gstatic.com'
      crossOrigin='true'
    />
    <link
      href='https://fonts.googleapis.com/css2?family=Anton&family=Noto+Sans+Tangsa&family=Roboto+Slab:wght@700;900&family=Roboto:wght@300;400&display=swap'
      rel='stylesheet'
    />
  </>
);

const IndexPage = () => {
  return (
    <StrictMode>
      <Wrapper>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Wrapper>
    </StrictMode>
  );
};

export default IndexPage;
