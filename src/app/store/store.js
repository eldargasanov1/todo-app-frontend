import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from 'entities/task';

import { userReducer } from 'entities/user';

export const store = configureStore({
	reducer: {
		user: userReducer,
		tasks: tasksReducer,
	},
});
