import React from 'react';
import SendData from './Sections/SendData';
import Analytics from './Sections/Analitycs';

function DataSection(props) {
  const currentSection = 'Analytics';
  return (
      <div className="h-screen flex-1 p-7">
        {<Analytics />}
      </div>
  );
}

export default DataSection;