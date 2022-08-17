import React from 'react';
import { render, screen } from '@testing-library/react';
import { Person } from '../index';

test('render Person component', () => {
  const name = 'John Doe';
	render(<Person name={name} />);
	const content = screen.getByText(new RegExp(`Hello ${name}`));

	expect(content).toBeInTheDocument();
});
