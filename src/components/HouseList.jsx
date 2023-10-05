import React, { useContext, useState } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  const [visibleHouses, setVisibleHouses] = useState(6); // Initially, show 6 cards

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }

  const showMoreHouses = () => {
    // Show 6 more houses when the "Show More" button is clicked
    setVisibleHouses((prevVisibleHouses) => prevVisibleHouses + 6);
  };

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.slice(0, visibleHouses).map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
        {visibleHouses < houses.length && (
          <div className='text-center mt-4'>
            <button
              onClick={showMoreHouses}
              className='bg-violet-700 text-white px-4 py-2 rounded-lg hover:bg-violet-800'
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HouseList;
