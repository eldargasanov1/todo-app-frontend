import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

export const AddTask = ({ onAdd }) => {
	const [value, setValue] = useState('');

	const handleAdd = (e, value) => {
		if (e.code === 'Enter' || e.target.type === 'button') {
			onAdd(value);
			setValue('');
		}
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<TextField
				label='Добавить задачу'
				sx={{ flexGrow: 1 }}
				value={value}
				onChange={e => setValue(e.target.value)}
				onKeyDown={e => handleAdd(e, value)}
			/>
			<Button variant='outlined' onClick={e => handleAdd(e, value)}>
				Добавить
			</Button>
		</Box>
	);
};
