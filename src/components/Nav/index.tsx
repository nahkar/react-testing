import React from 'react';

type Item = {
	name: string;
	href: string;
};

type Props = {
	items: Item[];
};

export const Nav = ({ items }: Props) => {
	return (
		<ul>
			{items.map(({ href, name }) => (
				<li key={href}>
					<a role="navigation" href={href}>
						{name}
					</a>
				</li>
			))}
		</ul>
	);
};
