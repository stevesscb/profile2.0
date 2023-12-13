import * as React from 'react';

function About() {
  return (
    <div className='about'>
      <p className='about__paragraph'>
        <p className='heading'>
          <span className='emoticon'>✌️</span> Hi there! I'm Steve,
        </p>
        <p>
          A front end developer - I bring ideas to life by building designs with
          the clear vision of handing over a final product that startups and
          business's can proudly stand behind.
        </p>
        <p>
          Although my main experience lies in code, I have a strong interest in
          design and love learning more in this space.
        </p>
        <p>
          I value clean code - less is more! I also love learning new
          technologies and expanding my skill set, spending time scanning the
          web looking for more efficient and updated methods.
        </p>
        <p>
          If you like what you hear and you think we could collaborate,
          <span className='color-light large-text'>&nbsp;please</span>
          &nbsp;reach out!
        </p>
      </p>
      <div className='about__other'></div>
    </div>
  );
}

export default About;
