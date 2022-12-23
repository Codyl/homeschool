import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('should render Homeschool', () => {
    render(<App />, { wrapper: BrowserRouter });
    const textElement = screen.getAllByRole('heading')[0];
    expect(textElement).toHaveTextContent('Homeschool');
  });
  test('should render a main', () => {
    render(<App />, { wrapper: BrowserRouter });
    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();
  });
  test('should render a menu', () => {
    render(<App />, { wrapper: BrowserRouter });
    const menu = screen.getByTestId('menu');
    const courseList = screen.getByTestId('course-list');
    expect(menu).toContainElement(courseList);
    expect(courseList).toHaveTextContent('Course List');
  });
  test('should contain route Home', async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    // verify page content for default route
    expect(screen.getByText(/Homeschool/i)).toBeInTheDocument();

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/Course List/i));
    expect(
      screen.getByText(/This is Course List/i)
    ).toBeInTheDocument();
  });
});
