import React from 'react';
import './styles.scss';

export const AppImage = ({ src, children, className, style }) => {
  return (
    <div className={`app-image ${className}`} style={style}>
      {children && children}
      <img src={src} alt="abc" />
    </div>
  );
};
