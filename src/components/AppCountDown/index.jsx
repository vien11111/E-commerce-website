import React, { useEffect, useState } from 'react';
import './style.scss';
import dayjs from 'dayjs';

const AppCountDown = ({ status }) => {
  let year = new Date().getFullYear();
  const deadline = +new Date(`8/10/${year}`) - +new Date();
  const [timeLeft, setTimeLeft] = useState({
    day: 0,
    hours: 0,
    minutes: 0,
    second: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const day = dayjs(new Date(deadline)).day();
      const hours = dayjs(new Date(deadline)).hour();
      const minutes = dayjs(new Date(deadline)).minute();
      const second = dayjs(new Date(deadline)).second();
      setTimeLeft({ day, hours, minutes, second });
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  return (
    <div className="cDown">
      <div className={`cDown__box cDown__box--${status}`}>
        <div className="cDown__box__title">{timeLeft.day}</div>
        <div className="cDown__box__label">Ngày</div>
      </div>
      <div className={`cDown__box cDown__box--${status}`}>
        <div className="cDown__box__title">{timeLeft.hours}</div>
        <div className="cDown__box__label">Giờ</div>
      </div>
      <div className={`cDown__box cDown__box--${status}`}>
        <div className="cDown__box__title">{timeLeft.minutes}</div>
        <div className="cDown__box__label">Phút</div>
      </div>
      <div className={`cDown__box cDown__box--${status}`}>
        <div className="cDown__box__title">{timeLeft.second}</div>
        <div className="cDown__box__label">Giây</div>
      </div>
    </div>
  );
};

export default AppCountDown;
