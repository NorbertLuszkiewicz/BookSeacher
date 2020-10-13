import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { theme } from 'theme/mainTheme';
import Button from 'components/Button/Button';

describe('Button component', () => {
  it('renders button element', () => {
    const { getByRole } = render(<Button theme={theme} />);

    expect(getByRole('button')).toBeInTheDocument();
  });
});
