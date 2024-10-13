'use client';

import NavBtn from './NavBtn'

const Nav = () => {
  return (
    <div className='bg-gray-800 rounded-3xl w-11/12 max-w-6xl py-2.5 flex flex-row justify-evenly flex-wrap self-center mt-3 gap-2'>
      <NavBtn text='Length' link='/'/>
      <NavBtn text='Time' link='/time'/>
      <NavBtn text='Weight' link='/weight'/>
      <NavBtn text='Volume' link='/volume'/>
      <NavBtn text='Temperature' link='/temperature'/>
  </div>
  );
};

export default Nav;