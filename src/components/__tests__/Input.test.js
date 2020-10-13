import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { theme } from 'theme/mainTheme';
import Input from 'components/Input/Input';

const renderInput = props => {
  const untils = render(<Input placeholder="Title" theme={theme} {...props} />);
  const input = untils.getByPlaceholderText(/title/i);

  return { ...untils, input };
};

describe('Input component', () => {
  it('renders input element', () => {
    const { input } = renderInput();

    expect(input).toBeInTheDocument();
  });

  it('displays proper value', () => {
    const { input } = renderInput();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Harry Potter' } });
    expect(input).toHaveValue('Harry Potter');
  });

  it('change style with props  ', () => {
    const { getByPlaceholderText, rerender } = renderInput();

    expect(getByPlaceholderText('Title')).toHaveStyle(`font-size: 1.4rem}`);

    rerender(<Input placeholder="Title" theme={theme} />);
    expect(getByPlaceholderText('Title')).not.toHaveStyle('padding-left: 30px');

    rerender(<Input placeholder="Title" theme={theme} search />);
    expect(getByPlaceholderText('Title')).toHaveStyle('padding-left: 30px');
  });
});
