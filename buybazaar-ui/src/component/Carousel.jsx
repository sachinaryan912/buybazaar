import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ maxWidth: '100%', height:'20%', padding: '30px' }}>
    <Slider {...settings}>
      <div style={{padding: '30px' }}>
        <img
          src="./static/images/img1.jpg"
          alt="Slide 1"
          style={{ width: '100%', borderRadius: '40px', height: '20em'}}
        />
      </div>
      <div style={{margin: '30px' }}>
        <img
          src="./static/images/img2.jpg"
          alt="Slide 2"
          style={{ width: '100%', borderRadius: '40px', height: '20em'}}
        />
      </div>
      <div style={{padding: '30px' }}>
        <img
          src="./static/images/img3.jpg"
          alt="Slide 3"
          style={{ width: '100%', borderRadius: '40px', height: '20em'}}
        />
      </div>
    </Slider>
    </div>
  );
};

