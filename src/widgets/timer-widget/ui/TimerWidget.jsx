import { Box, Stack } from '@mui/material';
import Timer from 'entities/timer';
import {
	CheckTimer,
	PauseTimer,
	SkipTimer,
	StartTimer,
	StopTimer,
} from 'features/timer';
import { useEffect, useState } from 'react';
import { useTimer } from 'entities/timer/lib/hooks';
import { TaskEntity } from 'entities/task';
import { getTaskByIdAPI } from 'shared/api/tasks';

export const TimerWidget = ({ taskId }) => {
	const [task, setTask] = useState({
		title: '',
		subtitle: '',
		completed: false,
	});

	useEffect(() => {
		(async () => {
			const {
				data: { title, subtitle, completed },
			} = await getTaskByIdAPI(taskId);
			setTask({
				title,
				subtitle,
				completed,
			});
		})();
	}, []);

	const {
		setTimeLeft,
		setIsCounting,
		setIsWorkTime,
		startTime,
		time,
		isCounting,
	} = useTimer();

	const buttons = (
		<Stack alignItems='center'>
			<Box>
				<StopTimer
					setTimeLeft={setTimeLeft}
					setIsCounting={setIsCounting}
					startTime={startTime}
				/>
				{isCounting ? (
					<PauseTimer setIsCounting={setIsCounting} />
				) : (
					<StartTimer setIsCounting={setIsCounting} />
				)}
				<SkipTimer
					setIsWorkTime={setIsWorkTime}
					setIsCounting={setIsCounting}
				/>
			</Box>
			<CheckTimer id={taskId} completed={task.completed} setTask={setTask} />
		</Stack>
	);
	const currentTask = (
		<TaskEntity
			id={taskId}
			title={task.title}
			subtitle={task.subtitle}
			isTimer
		/>
	);

	return <Timer currentTask={currentTask} buttons={buttons} time={time} />;
};
