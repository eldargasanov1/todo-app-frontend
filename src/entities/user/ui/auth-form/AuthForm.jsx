import { useRef, useState } from 'react';
import {
	Typography,
	TextField,
	Paper,
	Button,
	Box,
	Avatar,
	Input,
	IconButton,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { uploadAPI } from 'shared/api/user';
import { BASE_URL } from 'shared/config';

export const AuthForm = ({ isLoginForm = false, loginUser, registerUser }) => {
	const [avatarUrl, setAvatarUrl] = useState('');
	const inputRef = useRef(null);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			fullName: '',
		},
		mode: 'onChange',
	});

	const onAvatarChange = async file => {
		const avatar = new FormData();
		avatar.append('image', file);

		const { data } = await uploadAPI(avatar);

		setAvatarUrl(`${BASE_URL}/${data.url}`);
	};

	const onFormSubmit = async ({ email, password, fullName }) => {
		isLoginForm
			? loginUser(email, password)
			: registerUser(email, password, fullName, avatarUrl);
	};

	const EMAIL_REGEXP =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

	return (
		<Paper sx={{ width: 400, p: '50px', m: '50px auto' }} variant='outlined'>
			<Typography
				sx={{ textAlign: 'center', fontWeight: 'bold', mb: '30px' }}
				variant='h5'
			>
				{isLoginForm ? 'Вход в аккаунт' : 'Создание аккаунта'}
			</Typography>
			<Box
				component='form'
				onSubmit={handleSubmit(onFormSubmit)}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					mb: '30px',
				}}
			>
				{!isLoginForm && (
					<>
						<IconButton
							sx={{
								mb: '30px',
							}}
							onClick={() => inputRef.current.click()}
						>
							<Avatar
								src={avatarUrl}
								sx={{
									width: 100,
									height: 100,
								}}
							/>
							<Input
								type='file'
								inputRef={inputRef}
								sx={{ display: 'none' }}
								onChange={e => onAvatarChange(e.target.files[0])}
							/>
						</IconButton>
						<TextField
							sx={{ mb: '20px' }}
							fullWidth
							label='Полное имя'
							error={Boolean(errors.fullName?.message)}
							helperText={errors.fullName?.message}
							{...register('fullName', { required: 'Введите имя' })}
						/>
					</>
				)}
				<TextField
					sx={{ mb: '20px' }}
					fullWidth
					label='E-Mail'
					type='email'
					error={Boolean(errors.email?.message)}
					helperText={errors.email?.message}
					{...register('email', {
						required: 'Введите почту',
						pattern: EMAIL_REGEXP,
					})}
				/>
				<TextField
					sx={{ mb: '20px' }}
					fullWidth
					label='Пароль'
					type='password'
					error={Boolean(errors.password?.message)}
					helperText={errors.password?.message}
					{...register('password', { required: 'Введите пароль' })}
				/>
				<Button
					type='submit'
					size='large'
					variant='contained'
					fullWidth
					disabled={!isValid}
				>
					{isLoginForm ? 'Войти' : 'Зарегистрироваться'}
				</Button>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '5px',
				}}
			>
				<Typography sx={{ textAlign: 'center' }} variant='body1'>
					{!isLoginForm ? 'Уже зарегистрированы?' : 'Нет аккаунта?'}
				</Typography>
				<Button
					type='button'
					size='medium'
					variant='contained'
					component={Link}
					to={!isLoginForm ? '/login' : '/register'}
				>
					{!isLoginForm ? 'Войти' : 'Зарегистрироваться'}
				</Button>
			</Box>
		</Paper>
	);
};
