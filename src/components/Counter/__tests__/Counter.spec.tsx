import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from '../index';

test('render Button Wrapper component', () => {

	render(<Counter  />);
	const buttonElement = screen.getByTestId('increment_button');
	const contentElement = screen.getByRole('contentinfo');

  expect(contentElement).toHaveTextContent('Counter: 0');
  
  fireEvent.click(buttonElement);
  
  expect(contentElement).toHaveTextContent('Counter: 1');
});
