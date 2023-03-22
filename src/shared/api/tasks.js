import axios from 'shared/api/axios';

export const getTaskListAPI = filter => {
	return axios.get('/tasks', { headers: { Filter: filter } });
};

export const getTaskByIdAPI = taskId => {
	return axios.get(`/tasks/${taskId}`);
};

export const toggleTaskAPI = (taskId, task) => {
	return axios.patch(`/tasks/${taskId}`, task);
};

export const updateTaskAPI = (taskId, task) => {
	return axios.patch(`/tasks/${taskId}`, task);
};

export const removeTaskAPI = taskId => {
	return axios.delete(`/tasks/${taskId}`);
};

export const addTaskAPI = newTask => {
	return axios.post(`/tasks`, newTask);
};
