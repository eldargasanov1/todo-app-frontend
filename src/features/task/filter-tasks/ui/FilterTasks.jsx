import { Tab, Tabs } from '@mui/material';

export const FilterTasks = ({ filter, changeFilter }) => {
	return (
		<Tabs value={filter} onChange={(_, newValue) => changeFilter(newValue)}>
			<Tab label='Завершённые' value='completed' />
			<Tab label='Все' value='all' />
			<Tab label='Активные' value='active' />
		</Tabs>
	);
};
