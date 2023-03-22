import { ButtonGroup, Paper, Typography } from '@mui/material';

export const Timer = ({ currentTask, time, buttons }) => {
	return (
		<Paper
			sx={{
				width: 'max-content',
				p: '50px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
			variant='outlined'
		>
			{currentTask}
			<Typography
				sx={{ textAlign: 'center', fontWeight: 'bold', mb: '30px' }}
				variant='h1'
			>
				{time}
			</Typography>
			<ButtonGroup
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{buttons}
			</ButtonGroup>
		</Paper>
	);
};
