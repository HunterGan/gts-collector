import React from 'react';
import Sidebar from '../components/Sidebar';
import DataSection from '../components/DataSection';

function MainPage(props) {
  return (
    <div className="flex">
      <Sidebar />
      <DataSection />
    </div>
    
);
}

export default MainPage;