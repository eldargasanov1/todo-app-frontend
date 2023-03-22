import { PlayArrow } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export const StartTask = ({ id }) => {
	return (
		<IconButton component={Link} to={`/${id}/timer`}>
			<PlayArrow />
		</IconButton>
	);
};
