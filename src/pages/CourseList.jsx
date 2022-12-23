import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import AddCourse from '../components/AddCourse';
import Modal from '../components/common/Modal';
import coursesColumns from '../constants/courses-columns';
import coursesData from '../constants/courses-data';

const CourseList = () => {
  const data = useMemo(() => coursesData, []);
  const columns = useMemo(() => coursesColumns, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  return (
    <>
      <div className='flex flex-col gap-y-4 mx-4'>
        <h2 className='text-center overflow-y-auto'>This is Course List</h2>
        <button
          onClick={() => setShowAddCourseModal(true)}
          className='border border-[#D92414] rounded w-30'
          type='button'
          data-testid='add-course'
        >
          + Add Course
        </button>
        <table {...getTableProps()}>
          <thead className='bg-[#8C0303]'>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>
                        {
                          // Render the header
                          column.render('Header')
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody className='even:bg-[#F2F2F0]' {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr className='h-[10rem]' {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render('Cell')
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      <Modal show={showAddCourseModal} setShow={setShowAddCourseModal}>
        <AddCourse />
      </Modal>
    </>
  );
};

export default CourseList;
