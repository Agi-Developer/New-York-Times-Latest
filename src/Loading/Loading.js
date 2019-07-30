import React, { useState, useEffect } from 'react';

export default function Loading() {
	const [dots, updateDots] = useState('.');

	useEffect(() => {
		const timeInterval = setInterval(() => {
			if (dots.length < 3) {
				updateDots(dots + '.');
			} else {
				updateDots('.');
			}
		}, 1000);

		return () => {
			clearInterval(timeInterval);
		};
	}, [dots]);

	return <div className="loading">Loading{dots}</div>;
}