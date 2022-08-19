import React from 'react';

type Props = {
	title: string;
};

export const Button: React.FC<
	React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & Props
> = ({ title, ...props }) => <button {...props}>{title}</button>;
