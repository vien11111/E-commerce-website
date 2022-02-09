import React from 'react';
// import PropTypes from 'prop-types'
import { Button } from 'antd';

import './styles.scss';

export const AppButton = ({ isDivider, style, children, onClick }) => {
  return (
    <div className="wrapper-btn" style={style}>
      <Button onClick={onClick} type="primary">
        {children}
      </Button>
      {isDivider && <div className="divider" />}
    </div>
  );
};

AppButton.propTypes = {};
