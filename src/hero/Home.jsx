import React from 'react';

import HouseList from '../components/HouseList';
import StateDropdown from '../components/State';
import Search from '../components/Search';


const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      {/* <Poster/> */}
      {/* <Search/> */}
      <StateDropdown/>
      <HouseList/>
    </div>
  );
};

export default Home;