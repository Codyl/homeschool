import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';
import userEvent from '@testing-library/user-event';

describe('CourseList', () => {
  test('renders This is Course List', () => {
    render(<CourseList />);
    expect(screen.getByText(/This is Course List/i)).toBeInTheDocument();
  });

  test('should have centered header', () => {
    render(<CourseList />);
    const title = screen.getAllByRole('heading')[0];
    expect(title).toHaveClass('text-center');
    // expect(title.offsetTop).toBe(48)
  });
  test('should have table with these cols', () => {
    render(<CourseList />);
    const table = screen.getByRole('table');
    const cols = screen.getAllByRole('columnheader');
    const nameCol = cols.find((col) => col.textContent === 'Name');
    const ageCol = cols.find((col) => col.textContent === 'Suggested Age');
    const typeCol = cols.find((col) => col.textContent === 'Course Type');
    const outcomeCol = cols.find((col) => col.textContent === 'Outcome');
    expect(table).toBeInTheDocument();
    expect(cols.length).toEqual(5);
    expect(nameCol).toBeTruthy();
    expect(
      [nameCol, ageCol, typeCol, outcomeCol].every((test) => !!test === true)
    ).toBeTruthy();
  });
  // test('should bring up the add course modal', async () => {
  //   render(<CourseList />);
  //   const user = userEvent.setup();
  //   const addCourseButton = screen.getByTestId('add-course');
  //   await user.click(addCourseButton);
  //   const form = screen.getByRole('form');
  //   expect(form).toBeInTheDocument();
  //   const background = screen.getByTestId('background');
  //   await user.click(background);
  //   expect(form).toBeFalsy();
  //   await user.click(addCourseButton);
  // });
});
