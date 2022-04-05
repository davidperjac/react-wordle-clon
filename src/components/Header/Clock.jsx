import { useState, useEffect } from 'react';
import { Title } from '@mantine/core';

const Clock = () => {
	const [date, setDate] = useState();

	function refreshClock() {
		const today = new Date().getTime();
		const tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		tomorrow.setHours(0, 0, 0, 0);

		const distance = tomorrow.getTime() - today;

		const hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		setDate(
			(hours < 10 ? '0' : '') +
				hours +
				':' +
				(minutes < 10 ? '0' : '') +
				minutes +
				':' +
				(seconds < 10 ? '0' : '') +
				seconds
		);
	}

	useEffect(() => {
		const timerId = setInterval(refreshClock, 100);
		return () => {
			clearInterval(timerId);
		};
	}, []);

	return <Title>{date}</Title>;
};

export default Clock;
