import React, { memo } from 'react';
import Slider from 'react-slick';
import { AppCardProduct } from 'components/AppCardProduct';
import 'components/SlideProduct/styles.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'white',
        fontSize: 25,
        padding: '1px 7px',
        boxShadow: '0 0 4px 1px #ccc',
        cursor: 'pointer',
        position: 'absolute',
        right: 0,
        top: '40%',
      }}
      onClick={onClick}>
      <ion-icon
        name="chevron-forward-outline"
        style={{ color: '#bababa', fontSize: 20 }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'white',
        fontSize: 25,
        padding: '1px 7px',
        boxShadow: '0 0 4px 1px #ccc',
        cursor: 'pointer',
        position: 'absolute',
        left: 0,
        top: '40%',
        zIndex: 9999,
      }}
      onClick={onClick}>
      <ion-icon
        name="chevron-back-outline"
        style={{ color: '#bababa', fontSize: 20 }}
      />
    </div>
  );
}

const SlideProduct = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    className: 'slick-customer',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {(data || []).map((product, idx) => (
        <AppCardProduct key={idx} product={product} />
      ))}
    </Slider>
  );
};

export default SlideProduct;
