import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Header = ({ toggleNav }) => {
  return (
    <header className='flex justify-between p-4 bg-[#D99696]'>
      <Link to='/'>
        <h1>Homeschool</h1>
      </Link>
      <button onClick={toggleNav}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default Header;
