import * as React from 'react';

function Card({ number, title, description, url, img, alt }) {
  return (
    <div className={`card card--${number} news-slide-up`}>
      <img src={img} alt={alt} className='card__img' />
      <div className='card__caption'>
        <div className='card__caption--title'>
          <h2>{title}</h2>
        </div>
        <div className='card__caption--description'>
          <p>{description}</p>
          <div className='card__cta'>
            <a className='card__cta--link' href={url} target='blank'>
              Open site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
