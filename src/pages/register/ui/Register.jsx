import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { AuthForm } from 'entities/user';

export const Register = ({ isAuth }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth) {
			navigate('/');
		}
	}, [isAuth]);

	return (
		<Box component={'main'}>
			<Container>
				<AuthForm isLoginForm={false} />
			</Container>
		</Box>
	);
};
