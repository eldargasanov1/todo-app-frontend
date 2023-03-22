import { useState } from 'react';
import { Avatar, Box, IconButton, Menu, Tooltip } from '@mui/material';

import { stringAvatar } from 'shared/lib/helpers';

export const UserMenu = ({
	fullName = 'Unknown',
	avatarUrl = 'Unknown',
	logout,
}) => {
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const avatarProps = avatarUrl
		? { src: avatarUrl }
		: { ...stringAvatar(fullName) };

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title='Настройки'>
				<IconButton
					onClick={handleOpenUserMenu}
					size='large'
					sx={{ ml: 2 }}
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
				>
					<Avatar alt={fullName} {...avatarProps} />
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorElUser}
				id='account-menu'
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
				onClick={handleCloseUserMenu}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				{logout}
			</Menu>
		</Box>
	);
};
