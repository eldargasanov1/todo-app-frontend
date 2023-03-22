import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	authMeAPI,
	loginUserAPI,
	registerUserAPI,
	uploadAPI,
} from 'shared/api/user';

//===============================================

const loginUser = createAsyncThunk(
	'loginUser',
	async ({ email, password }, { dispatch, rejectWithValue }) => {
		try {
			const { data, status } = await loginUserAPI(email, password);

			if (status >= 400) {
				throw new Error(status);
			}

			localStorage.setItem('token', data.token);
			dispatch(setUser({ userInfo: data }));
		} catch (error) {
			return rejectWithValue(
				`${error.message}: Ошибка получение данных о пользователе`
			);
		}
	}
);
const registerUser = createAsyncThunk(
	'registerUser',
	async (
		{ email, password, fullName, avatarUrl },
		{ dispatch, rejectWithValue }
	) => {
		try {
			const { data, status } = await registerUserAPI(
				email,
				password,
				fullName,
				avatarUrl
			);

			if (status >= 400) {
				throw new Error(status);
			}

			localStorage.setItem('token', data.token);
			dispatch(setUser({ userInfo: data }));
		} catch (error) {
			return rejectWithValue(`${error.message}: Ошибка регистрации`);
		}
	}
);

const authMe = createAsyncThunk(
	'authMe',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const token = localStorage.getItem('token');

			if (!token) {
				throw new Error('Токен отсутствует');
			}

			const { data, status } = await authMeAPI();

			if (status >= 400) {
				throw new Error(status);
			}

			dispatch(setUser({ userInfo: data }));
		} catch (error) {
			return rejectWithValue(`${error.message}: Ошибка авторизации`);
		}
	}
);

//===============================================

const userSlice = createSlice({
	name: 'user',
	initialState: {
		userInfo: null,
		isLoading: false,
		error: null,
	},
	reducers: {
		setUser: (state, action) => {
			state.userInfo = action.payload.userInfo;
		},
		logoutUser: (state, action) => {
			state.userInfo = null;
			localStorage.removeItem('token');
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loginUser.pending, (state, action) => {
				state.error = null;
				state.isLoading = true;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
			});
		builder
			.addCase(registerUser.pending, (state, action) => {
				state.error = null;
				state.isLoading = true;
			})
			.addCase(registerUser.rejected, (state, action) => {
				console.log(action);
				state.error = action.payload;
				state.isLoading = false;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false;
			});
		builder
			.addCase(authMe.pending, (state, action) => {
				state.error = null;
				state.isLoading = true;
			})
			.addCase(authMe.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			})
			.addCase(authMe.fulfilled, (state, action) => {
				state.isLoading = false;
			});
	},
});

//===============================================

export { loginUser, registerUser, authMe };
export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
