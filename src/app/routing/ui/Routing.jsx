import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from 'pages/home';
import Layout from 'pages/layout';
import Login from 'pages/login';
import Register from 'pages/register';
import { useEffect } from 'react';
import TaskDetails from 'pages/task-details';
import { Loading } from 'pages/Loading';
import TimerPage from 'pages/timer-page';

export const Routing = ({ isAuth, authMe }) => {
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			navigate('/loading');
			const res = await authMe();

			if (res.error) {
				navigate('/login');
			} else {
				navigate('/');
			}
		})();
	}, [isAuth]);

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path=':id/'>
					<Route index element={<TaskDetails />} />
					<Route path='timer' element={<TimerPage />} />
				</Route>
			</Route>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/loading' element={<Loading />} />
		</Routes>
	);
};
