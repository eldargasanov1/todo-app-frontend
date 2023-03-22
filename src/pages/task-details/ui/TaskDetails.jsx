import { useEffect } from 'react';
import {
	Typography,
	TextField,
	Paper,
	Button,
	Box,
	Container,
	Checkbox,
	FormControlLabel,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { getTaskByIdAPI, updateTaskAPI } from 'shared/api/tasks';
import { useNavigate, useParams } from 'react-router-dom';

export const TaskDetails = () => {
	const {
		handleSubmit,
		setValue,
		control,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			title: '',
			subtitle: '',
			completed: false,
		},
		mode: 'onChange',
	});

	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const {
				data: { title, subtitle, completed },
			} = await getTaskByIdAPI(id);
			setValue('title', title);
			setValue('subtitle', subtitle);
			setValue('completed', completed);
		})();
	}, []);

	const onFormSubmit = async ({ title, subtitle, completed }) => {
		await updateTaskAPI(id, { title, subtitle, completed });
		navigate('/');
	};

	return (
		<Box component={'main'}>
			<Container>
				<Paper
					sx={{ width: 400, p: '50px', m: '50px auto' }}
					variant='outlined'
				>
					<Typography
						sx={{ textAlign: 'center', fontWeight: 'bold', mb: '30px' }}
						variant='h5'
					>
						Изменить задачу
					</Typography>
					<Box
						component='form'
						onSubmit={handleSubmit(onFormSubmit)}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
							mb: '30px',
						}}
					>
						<Controller
							control={control}
							name='title'
							render={({ field: { value, onChange } }) => (
								<TextField
									sx={{ mb: '20px' }}
									fullWidth
									label='Название'
									type='text'
									error={Boolean(errors.title?.message)}
									helperText={errors.title?.message}
									value={value}
									onChange={onChange}
								/>
							)}
						/>
						<Controller
							control={control}
							name='subtitle'
							render={({ field: { value, onChange } }) => (
								<TextField
									sx={{ mb: '20px' }}
									fullWidth
									label='Введите описание'
									type='text'
									value={value}
									onChange={onChange}
								/>
							)}
						/>
						<Controller
							control={control}
							name='completed'
							render={({ field: { value, onChange } }) => (
								<FormControlLabel
									value='completed'
									control={
										<Checkbox
											value={value}
											checked={value}
											onChange={onChange}
										/>
									}
									label='Выполнено:'
									labelPlacement='start'
									sx={{
										m: '0 0 20px 0',
										p: 0,
										display: 'flex',
										alignItems: 'center',
										gap: '5px',
									}}
								/>
							)}
						/>
						<Button
							type='submit'
							size='large'
							variant='contained'
							fullWidth
							disabled={!isValid}
						>
							Сохранить
						</Button>
					</Box>
				</Paper>
			</Container>
		</Box>
	);
};
