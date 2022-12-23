import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ show, setShow }) => {
  return (
    <>
      <nav
        data-testid='menu'
        className={`${
          !show
            ? 'hidden'
            : 'z-10 min-h-screen absolute top-0 w-[10rem] bg-[#F2F2F0] drop-shadow-lg'
        }`}
      >
        <ul>
          <li data-testid='course-list'>
            <Link
              className='block px-4'
              onClick={() => setShow(false)}
              to='courses'
            >
              Course List
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => setShow(false)}
        className={`${
          !show
            ? 'hidden'
            : 'absolute w-full top-0 min-h-screen bg-[#D99696] opacity-40'
        }`}
      ></button>
    </>
  );
};

export default SideNav;
