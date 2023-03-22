import { StopCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const Stop = ({ onClick }) => {
	return (
		<IconButton onClick={onClick}>
			<StopCircle fontSize='large' />
		</IconButton>
	);
};
