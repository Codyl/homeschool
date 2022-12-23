import { render, screen } from '@testing-library/react';
import Home from './home';

describe('Home', () => {
  test('should run', () => {
    render(<Home />);
    const textElement = screen.getByRole('heading');
    expect(textElement).toHaveTextContent('Home');
  });
});
