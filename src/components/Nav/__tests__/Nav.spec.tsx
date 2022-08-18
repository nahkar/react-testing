import React from 'react';
import { render, screen } from '@testing-library/react';
import { Nav } from '../index';

test('render Nav component with correct name and attribute href', () => {
	const items = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'About',
			href: '/about'
		}
	];
	render(<Nav items={items} />);
	const links = screen.getAllByRole('navigation');
	expect(links[0]).toHaveTextContent(items[0].name);
  expect(links[0]).toHaveAttribute('href', items[0].href);
	expect(links[1]).toHaveTextContent(items[1].name);
  expect(links[1]).toHaveAttribute('href', items[1].href);
});
