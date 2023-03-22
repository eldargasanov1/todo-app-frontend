export { default as TaskEntity } from './ui/TaskEntityContainer';

export {
	default as tasksReducer,
	getTasksThunk,
	addTaskThunk,
	removeTaskThunk,
	toggleTaskThunk,
	selectByIdTasks,
	selectIdsTasks,
	selectEntitiesTasks,
	selectAllTasks,
	selectTotalTasks,
	setTasks,
	addTask,
	removeTask,
	toggleTask,
	changeFilter,
} from './model/tasksSlice';
