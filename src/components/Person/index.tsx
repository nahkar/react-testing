import React from 'react';

interface Props {
	name: string;
}

export const Person = ({ name }: Props) => {
	return <div>Hello {name}</div>;
};
