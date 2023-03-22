import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const DeleteTask = ({ id, onClick }) => {
	return (
		<IconButton onClick={() => onClick(id)}>
			<Delete />
		</IconButton>
	);
};
