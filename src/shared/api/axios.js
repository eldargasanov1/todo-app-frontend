import axios from 'axios';
import { BASE_URL } from 'shared/config';

const instance = axios.create({
	baseURL: BASE_URL,
});

instance.interceptors.request.use(config => {
	config.headers.Authorization = window.localStorage.getItem('token');
	return config;
});

export default instance;
