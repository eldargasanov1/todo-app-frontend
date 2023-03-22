import { Cancel, CheckCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Check = ({ onClick, completed }) => {
	const navigate = useNavigate();

	return (
		<>
			{!completed ? (
				<IconButton
					onClick={() => {
						onClick();
						navigate('/');
					}}
				>
					<CheckCircle fontSize='large' />
				</IconButton>
			) : (
				<IconButton onClick={onClick}>
					<Cancel fontSize='large' />
				</IconButton>
			)}
		</>
	);
};
