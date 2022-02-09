import React from 'react';
import './appTag.scss';

const TagName = ({ isActive, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`tag-name ${isActive ? 'active' : ''}`}
      >
      {children}
    </div>
  );
};

export default TagName;
