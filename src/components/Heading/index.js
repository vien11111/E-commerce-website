import React from 'react';
import './styles.scss';

const Heading = ({ children, isLeft = false }) => {
  return (
    <div className="wrapper" style={{ textAlign: isLeft ? 'left' : 'center' }}>
      <div className="wrapper__title">{children}</div>
    </div>
  );
};

export default Heading;
