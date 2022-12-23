import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import Modal from '../components/common/Modal';
import { PrimaryHeader } from '../components/common/styled/Headings';

export default [
  {
    Header: '',
    id: 'test',
    Cell: ({ row: { original } }) => {
      const [showCourseDetailsModal, setShowCourseDetailsModal] =
        useState(false);
      return (
        <>
          <button onClick={setShowCourseDetailsModal} className=''>
            <AiFillEye size='2rem' />
          </button>
          <Modal
            show={showCourseDetailsModal}
            setShow={setShowCourseDetailsModal}
          >
            <PrimaryHeader>Course Details</PrimaryHeader>
            <p>Course: {original.name}</p>
            <p>Type: {original.courseType}</p>
            <p>outcome: {original.outcome}</p>
            <p>suggestedAge: {original.suggestedAge}</p>
            <div>Requriements:</div>
            <ul>
              {original.requirements.map((requirement, index) => (
                <li key={index}>* {requirement}</li>
              ))}
            </ul>
          </Modal>
        </>
      );
    },
  },
  {
    Header: 'Name',
    accessor: 'name',
    headerClass: '',
  },
  {
    Header: 'Course Type',
    accessor: 'courseType',
  },
  {
    Header: 'Suggested Age',
    accessor: 'suggestedAge',
  },
  {
    Header: 'Outcome',
    accessor: 'outcome',
    // cellClass: 'bg-red-800',
  },
];
