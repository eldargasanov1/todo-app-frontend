import axios from 'shared/api/axios';

export const loginUserAPI = (email, password) => {
	return axios.post('/auth/login', { email, password });
};

export const registerUserAPI = (email, password, fullName, avatarUrl) => {
	return axios.post('/auth/register', { email, password, fullName, avatarUrl });
};

export const authMeAPI = () => {
	return axios.get('/auth/me');
};

export const uploadAPI = avatar => {
	return axios.post('/upload', avatar);
};
