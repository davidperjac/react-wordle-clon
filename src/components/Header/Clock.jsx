import { useState, useEffect } from 'react';
import { Title } from '@mantine/core';

const Clock = () => {
	const [date, setDate] = useState(new Date());

	function refreshClock() {
		setDate(new Date());
	}
	
  useEffect(() => {
		const timerId = setInterval(refreshClock, 1000);
		return () => {
			clearInterval(timerId);
		};
	}, []);

	return <Title>{date.toLocaleTimeString()}</Title>;
};

export default Clock;
