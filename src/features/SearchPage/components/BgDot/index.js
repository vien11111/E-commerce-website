import React from 'react';
import bgDot from 'assets/img/bg-dot.png';
import { AppImage } from 'components/AppImage';
import './styles.scss';

const Index = () => {
  return (
    <div className="bg-dot">
      <AppImage src={bgDot} />
    </div>
  );
};

export default Index;
