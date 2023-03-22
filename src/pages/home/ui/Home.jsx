import {
	Box,
	Container,
	Divider,
	List,
	Stack,
	Typography,
} from '@mui/material';
import { AddTask, FilterTasks } from 'features/task';
import { useEffect } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Task from 'widgets/task';

export const Home = ({ tasks, getTasks }) => {
	const [parent] = useAutoAnimate();

	useEffect(() => {
		getTasks();
	}, []);

	return (
		<Box component={'main'}>
			<Container>
				<Stack divider={<Divider />} spacing={2}>
					<Box>
						<Stack divider={<Divider />}>
							<Box sx={{ display: 'inline-flex', justifyContent: 'center' }}>
								<FilterTasks />
							</Box>

							<List sx={{ height: '70vh', overflow: 'auto' }} ref={parent}>
								{tasks.length ? (
									tasks.map(task => <Task key={task._id} {...task} />)
								) : (
									<Typography
										sx={{ textAlign: 'center', fontWeight: 'bold', m: '30px' }}
										variant='h5'
									>
										Задачи отсутствуют
									</Typography>
								)}
							</List>
						</Stack>
					</Box>
					<AddTask />
				</Stack>
			</Container>
		</Box>
	);
};
