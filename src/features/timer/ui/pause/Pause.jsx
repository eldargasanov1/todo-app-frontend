import { PauseCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const Pause = ({ onClick }) => {
	return (
		<IconButton onClick={onClick}>
			<PauseCircle fontSize='large' />
		</IconButton>
	);
};
