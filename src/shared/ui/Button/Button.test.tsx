import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('classNames', () => {
  test('with only one first param', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('with only one first param', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
