import { Carousel } from 'antd';
import React from 'react';
import './style.css';
import slider22 from '../../assets/img/slider_2.png';
import slider2 from '../../assets/img/slider_2.jpeg';
import slider3 from '../../assets/img/slider_3.png';
import slider4 from '../../assets/img/slider_3.jpeg';

import maleSlide from '../../assets/img/nam-sl1.jpeg';
import femaleSlide from '../../assets/img/nu-sl1.jpeg';

const Slide = ({ male = 3 }) => {
  const SLIDE = {
    1: [maleSlide],
    2: [femaleSlide],
    3: [slider2, slider22, slider3, slider4],
  };

  return (
    <div>
      <Carousel autoplay>
        {SLIDE[male].map((img, idx) => (
          <div key={idx}>
            <img src={img} className="slide" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
