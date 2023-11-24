import * as React from 'react';
import { Helmet } from 'react-helmet';

import '../styles/global.scss';

import MainNavigation from '../layout/MainNavigation';
import Wrapper from '../components/Wrapper';
// import Hero from '../sections/Hero';

const IndexPage = () => {
  return (
    <>
      <MainNavigation />
      <Wrapper>
        <main></main>
      </Wrapper>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <Helmet>
    <meta charSet='utf-8' />
    <title>Stephen Cole Bowen</title>
    <link rel='canonical' href='http://mysite.com/example' />
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
    {/* <link
      href='https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap'
      rel='stylesheet'
    /> */}
    <link
      href='https://fonts.googleapis.com/css2?family=Noto+Sans+Tangsa&display=swap'
      rel='stylesheet'
    />
    <meta
      name='description'
      content="Stephen Cole Bowen's professional portfolio"
    />
  </Helmet>
);
