import * as React from 'react';

import Wrapper from '../layout/Wrapper';

import '../sass/main.scss';

const IndexPage = () => {
  return (
    <Wrapper>
      <h1>Index page</h1>
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
      href='https://fonts.googleapis.com/css2?family=Noto+Sans+Tangsa&family=Roboto+Slab:wght@700&family=Roboto:wght@300;400&display=swap'
      rel='stylesheet'
    />
  </>
);
