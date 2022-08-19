import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from '../index';

test('render Search component', () => {
	render(<Search  />);
	const search: HTMLInputElement = screen.getByTestId('search');

  expect(search.value).toBe('');
  
  fireEvent.change(search, { target: { value: 'test' } });
  
  expect(search.value).toBe('test');
});
