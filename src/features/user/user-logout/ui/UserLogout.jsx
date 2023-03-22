import {
	ListItemIcon,
	MenuItem,
} from '@mui/material';
import { Logout } from '@mui/icons-material';

export const UserLogout = ({ onClick }) => {
	return (
		<MenuItem onClick={onClick}>
			<ListItemIcon>
				<Logout fontSize='small' />
			</ListItemIcon>
			Выйти
		</MenuItem>
	);
};
