import axios from 'shared/api/axios';

export const loginUserAPI = (email, password) => {
	return axios.post('/auth/login', { email, password });
};

export const registerUserAPI = (email, password, fullName, avatarUrl) => {
	const newUser = { email, password, fullName };

	if (avatarUrl !== '') {
		newUser.avatarUrl = avatarUrl;
	}

	return axios.post('/auth/register', newUser);
};

export const authMeAPI = () => {
	return axios.get('/auth/me');
};

export const uploadAPI = avatar => {
	return axios.post('/upload', avatar);
};
