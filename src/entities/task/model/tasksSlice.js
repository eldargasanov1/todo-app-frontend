import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import {
	addTaskAPI,
	getTaskListAPI,
	removeTaskAPI,
	toggleTaskAPI,
} from 'shared/api/tasks';

//===============================================

const tasksAdapter = createEntityAdapter({
	selectId: entity => entity._id,
});

const initialState = tasksAdapter.getInitialState({
	filter: 'all',
	isLoading: true,
	error: null,
	status: '',
});

const tasksSelectors = tasksAdapter.getSelectors(state => state.tasks);

//===============================================

const getTasksThunk = createAsyncThunk(
	'getTasks',
	async (_, { dispatch, rejectWithValue, getState }) => {
		try {
			const { data, status } = await getTaskListAPI(getState().tasks.filter);

			if (status >= 400) {
				throw new Error(status);
			}

			dispatch(setTasks(data));
		} catch (error) {
			return rejectWithValue(`${error.message}: Не удалось получить задачи`);
		}
	}
);

const addTaskThunk = createAsyncThunk(
	'addNewTask',
	async (title, { dispatch, rejectWithValue }) => {
		try {
			const newTask = {
				title,
				completed: false,
			};

			const { data, status } = await addTaskAPI(newTask);

			if (status >= 400) {
				throw new Error(status);
			}

			dispatch(addTask(data));
		} catch (error) {
			return rejectWithValue(`${error.message}: Не удалось получить задачу`);
		}
	}
);

const removeTaskThunk = createAsyncThunk(
	'removeTaskThunk',
	async (taskId, { dispatch, rejectWithValue }) => {
		try {
			const { status } = await removeTaskAPI(taskId);

			if (status >= 400) {
				throw new Error(status);
			}

			dispatch(removeTask(taskId));
		} catch (error) {
			return rejectWithValue(`${error.message}: Не удалось получить задачу`);
		}
	}
);

const toggleTaskThunk = createAsyncThunk(
	'toggleTaskThunk',
	async (taskId, { dispatch, rejectWithValue, getState }) => {
		try {
			const currentTask = selectByIdTasks(getState(), taskId);
			const newTask = { ...currentTask, completed: !currentTask.completed };

			const { status } = await toggleTaskAPI(taskId, newTask);

			if (status >= 400) {
				throw new Error(status);
			}

			dispatch(toggleTask(newTask));
		} catch (error) {
			return rejectWithValue(`${error.message}: Не удалось получить задачу`);
		}
	}
);

//===============================================

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: initialState,
	reducers: {
		setTasks: tasksAdapter.setAll,
		addTask: tasksAdapter.addOne,
		removeTask: tasksAdapter.removeOne,
		toggleTask: tasksAdapter.upsertOne,
		changeFilter: (state, action) => {
			state.filter = action.payload.filter;
		},
	},
});

//===============================================

export { getTasksThunk, addTaskThunk, removeTaskThunk, toggleTaskThunk };
export const {
	selectById: selectByIdTasks,
	selectIds: selectIdsTasks,
	selectEntities: selectEntitiesTasks,
	selectAll: selectAllTasks,
	selectTotal: selectTotalTasks,
} = tasksSelectors;
export const { setTasks, addTask, removeTask, toggleTask, changeFilter } =
	tasksSlice.actions;
export default tasksSlice.reducer;
