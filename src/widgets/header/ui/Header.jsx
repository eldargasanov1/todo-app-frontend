import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { UserMenu } from 'entities/user';
import UserLogout from 'features/user/user-logout';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<AppBar position='static'>
			<Container>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component={Link}
						to='/'
						sx={{
							mr: 2,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
							flexGrow: 1,
						}}
					>
						ToDo
					</Typography>
					<UserMenu logout={<UserLogout />} />
				</Toolbar>
			</Container>
		</AppBar>
	);
};
