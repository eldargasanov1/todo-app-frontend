import { Box, CircularProgress } from '@mui/material';

export const Loading = () => (
	<Box
		component={'main'}
		sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
	>
		<CircularProgress />
	</Box>
);
