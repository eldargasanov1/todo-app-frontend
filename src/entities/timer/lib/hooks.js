import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import alarm from 'public/sounds/alarm.mp3';

export const useTimer = () => {
	const [isWorkTime, setIsWorkTime] = useState(true);
	const [isCounting, setIsCounting] = useState(false);
	const [timeLeft, setTimeLeft] = useState(1500);
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft - minutes * 60;
	const startTime = isWorkTime ? 25 * 60 : 5 * 1;

	const [playAlarm] = useSound(alarm, { volume: 0.25 });

	useEffect(() => {
		setIsCounting(false);
		setTimeLeft(startTime);
	}, [startTime]);

	useEffect(() => {
		let timerID;
		if (isCounting) {
			timerID = setInterval(() => {
				setTimeLeft(prev => prev - 1);
			}, 1000);
		}

		return () => {
			clearInterval(timerID);
		};
	}, [isCounting, isWorkTime]);

	useEffect(() => {
		if (timeLeft === 0) {
			playAlarm();
			setIsWorkTime(prev => !prev);
			setIsCounting(false);
		}
	}, [timeLeft]);

	const getPadTime = time => time.toString().padStart(2, '0');

	const time = `${getPadTime(minutes)}:${getPadTime(seconds)}`;

	return {
		setTimeLeft,
		setIsCounting,
		setIsWorkTime,
		startTime,
		time,
		isCounting,
	};
};
