import { PlayCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const Start = ({ onClick }) => {
	return (
		<IconButton onClick={onClick}>
			<PlayCircle fontSize='large' />
		</IconButton>
	);
};
