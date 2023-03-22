import { Box, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import TimerWidget from 'widgets/timer-widget';

export const TimerPage = () => {
	const { id } = useParams();

	return (
		<Box component={'main'} sx={{ mt: 6 }}>
			<Container sx={{ display: 'flex', justifyContent: 'center' }}>
				<TimerWidget taskId={id} />
			</Container>
		</Box>
	);
};
