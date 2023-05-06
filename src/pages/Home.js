import React from 'react';


function Home(props) {
  return (
    <div className='grid grid-cols-12 min-h-full max-w-[960px] mx-auto'>
      <div className='col-span-3 bg-indigo-600'></div>
      <div className='col-span-9 bg-slate-600'></div>
    </div>
  );
}

export default Home;