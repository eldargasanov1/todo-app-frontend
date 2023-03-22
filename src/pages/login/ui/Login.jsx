import { Box, Container } from '@mui/material';
import { AuthForm } from 'entities/user';

export const Login = () => {
	return (
		<Box component={'main'}>
			<Container>
				<AuthForm isLoginForm={true} />
			</Container>
		</Box>
	);
};
