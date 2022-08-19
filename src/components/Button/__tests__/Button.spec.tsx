import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../index';

test('render Button Wrapper component', () => {  
  // Stub function that track how often it is called
  const onClick = jest.fn();
	const title = 'On Subscribe';
	render(<Button title={title} onClick={onClick}/>);
  const button = screen.getByText(title);
  expect(button).toBeInTheDocument();
  expect(onClick).toHaveBeenCalledTimes(0);
  // simulate click event on button
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
