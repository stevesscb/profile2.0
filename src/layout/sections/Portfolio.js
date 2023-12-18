import * as React from 'react';

import Card from '../../components/Card';

// Images
import HorizonDigital from '../../images/horizon-digital.jpg';

function Portfolio() {
  return (
    <div className='projects'>
      <div className='projects__header'>
        <h4 className='projects__header--main'>My Work</h4>
        <h5 className='projects__header--sub'>Portfolio</h5>
      </div>
      <div className='projects__cards'>
        <Card
          number='1'
          img={HorizonDigital}
          alt='Horizon digital image'
          title='Horizon digital'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quaerat quae dolorem, ipsam quas saepe id labore sint neque harum
            quia accusantium sit unde atque eius natus vel fugit? Labore! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ratione quaerat
            quae dolorem, ipsam quas saepe id labore sint neque harum quia
            accusantium sit unde atque eius natus vel fugit? Labore!'
          url='#'
        />

        <Card
          number='2'
          img={HorizonDigital}
          alt='Horizon digital image'
          title='Horizon digital'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quaerat quae dolorem, ipsam quas saepe id labore sint neque harum
            quia accusantium sit unde atque eius natus vel fugit? Labore! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ratione quaerat
            quae dolorem, ipsam quas saepe id labore sint neque harum quia
            accusantium sit unde atque eius natus vel fugit? Labore!'
          url='#'
        />

        <Card
          number='3'
          img={HorizonDigital}
          alt='Horizon digital image'
          title='Horizon digital'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quaerat quae dolorem, ipsam quas saepe id labore sint neque harum
            quia accusantium sit unde atque eius natus vel fugit? Labore! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ratione quaerat
            quae dolorem, ipsam quas saepe id labore sint neque harum quia
            accusantium sit unde atque eius natus vel fugit? Labore!'
          url='#'
        />

        <Card
          number='4'
          img={HorizonDigital}
          alt='Horizon digital image'
          title='Horizon digital'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quaerat quae dolorem, ipsam quas saepe id labore sint neque harum
            quia accusantium sit unde atque eius natus vel fugit? Labore! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ratione quaerat
            quae dolorem, ipsam quas saepe id labore sint neque harum quia
            accusantium sit unde atque eius natus vel fugit? Labore!'
          url='#'
        />

        <Card
          number='5'
          img={HorizonDigital}
          alt='Horizon digital image'
          title='Horizon digital'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quaerat quae dolorem, ipsam quas saepe id labore sint neque harum
            quia accusantium sit unde atque eius natus vel fugit? Labore! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ratione quaerat
            quae dolorem, ipsam quas saepe id labore sint neque harum quia
            accusantium sit unde atque eius natus vel fugit? Labore!'
          url='#'
        />

        <Card
          number='6'
          img={HorizonDigital}
          alt='Horizon digital image'
          title='Horizon digital'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quaerat quae dolorem, ipsam quas saepe id labore sint neque harum
            quia accusantium sit unde atque eius natus vel fugit? Labore! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ratione quaerat
            quae dolorem, ipsam quas saepe id labore sint neque harum quia
            accusantium sit unde atque eius natus vel fugit? Labore!'
          url='#'
        />
      </div>
    </div>
  );
}

export default Portfolio;
