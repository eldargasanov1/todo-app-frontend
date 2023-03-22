import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const TaskEntity = ({
	id,
	title,
	subtitle,
	before,
	after,
	isTimer = false,
}) => {
	return (
		<ListItem disablePadding secondaryAction={after}>
			{before && <ListItemIcon>{before}</ListItemIcon>}
			<ListItemButton component={Link} to={`/${id}`}>
				<ListItemText
					primary={title}
					secondary={subtitle ? subtitle : null}
					sx={{ textAlign: isTimer && 'center' }}
				/>
			</ListItemButton>
		</ListItem>
	);
};
