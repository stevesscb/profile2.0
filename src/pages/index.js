import * as React from 'react';

import Wrapper from '../layout/Wrapper';

import Navbar from '../layout/Navbar';
import Header from '../layout/Header';
import About from '../layout/sections/About';
import Portfolio from '../layout/sections/Portfolio';
import Contact from '../layout/sections/Contact';

import '../css/style.css';

const IndexPage = () => {
  return (
    <Wrapper>
      <Navbar />

      <Header />

      <About />

      <Portfolio />

      <Contact />
    </Wrapper>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta http-equiv='X-UA-Compatible' content='ie=edge' />
    <meta
      name='Stephen Cole Bowen'
      content='Front end development / Web development professional portfolio'
    />
    <title>Stephen Cole Bowen</title>
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
    <link
      href='https://fonts.googleapis.com/css2?family=Noto+Sans+Tangsa&family=Roboto+Slab:wght@700;900&family=Roboto:wght@300;400&display=swap'
      rel='stylesheet'
    />
  </>
);
