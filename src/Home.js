import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className ="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/N2FhYWExZDYt/N2FhYWExZDYt-ZmI1OTE0MzUt-w1500._CB409509032_.jpg" 
        alt=""
        />

        <div className="home__row">
          <Product 
            id="121646"
            title='You Dont Know JS Yet: Get Started: 1'
            price={59.99}
            image='https://m.media-amazon.com/images/I/41T5H8u7fUL._SS135_.jpg'
            rating={4}
          />
          <Product 
            id="421478"
            title='Oral-B genius 9000'
            price={145}
            image='https://m.media-amazon.com/images/I/61bMfvCkShL._AC_UL320_.jpg'
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product 
            id="479615"
            title='Kitchenaid 5KSM5BER K5 Heavy Duty Mixer, 315 Watt, Red'
            price={516.84}
            image='https://m.media-amazon.com/images/I/41OVbbkf-QL._AC_UL320_.jpg'
            rating={4}
            />
          <Product 
            id="412569"
            title='Gamin Fenix 6X - Sapphire Carbon Grey'
            price={649}
            image='https://m.media-amazon.com/images/I/51PQ-aYaWxL._AC_UL320_.jpg'
            rating={4}
            />
          <Product 
            id="874523"
            title= 'Echo Dot (3rd Gen) - Smart speaker with Alexa - Sandstone Fabric'
            price={29.99}
            image='https://m.media-amazon.com/images/I/61Ca1bFuAhL._AC_UY218_.jpg'
            rating={5}
          /> 
        </div>
        <div className="home__row">
          <Product 
            id="874523"
            title='Samsung LC49J890DKUXEN 49" Curved Ultra Wide LED Monitor'
            price={820}
            image='https://m.media-amazon.com/images/I/71RC3o90shL._AC_UY218_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
