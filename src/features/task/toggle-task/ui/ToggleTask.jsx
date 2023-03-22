import { Checkbox } from '@mui/material';

export const ToggleTask = ({ onClick, completed, id }) => {
	return <Checkbox onClick={() => onClick(id)} checked={completed} />;
};
