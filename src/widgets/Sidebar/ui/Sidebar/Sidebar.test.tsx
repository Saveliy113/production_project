import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('with only one first param', () => {
    render(<Sidebar />);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
