import React, { useState } from 'react';

type Props = {};

export const Counter = (props: Props) => {
	const [count, setCount] = useState(0);
	return (
		<>
			<div role='contentinfo'>Counter: {count}</div>
			<button data-testid="increment_button" onClick={() => setCount(count + 1)}>+</button>
		</>
	);
};
