import { NextPlan } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const Skip = ({ onClick }) => {
	return (
		<IconButton onClick={onClick}>
			<NextPlan fontSize='large' />
		</IconButton>
	);
};
