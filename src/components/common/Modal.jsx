import React from 'react';
import { GrClose } from 'react-icons/gr';

const Modal = ({ children, setShow, show = false }) => {
  return (
    <>
      {show && (
        <>
          <div
            data-testid='background'
            onClick={() => setShow(false)}
            className='bg-[#D99696] absolute inset-0 w-full min-h-screen opacity-50'
          ></div>
          <div className='absolute shadow-xl rounded-lg min-w-[400px] inset-40  bg-[#F2F2F0]'>
            <button className='float-right p-4' onClick={() => setShow(false)}>
              <GrClose />
            </button>
            <div className='m-4'>{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
