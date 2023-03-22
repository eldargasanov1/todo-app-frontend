import { connect } from 'react-redux';
import { AuthForm } from './AuthForm';
import { loginUser, registerUser } from 'entities/user';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
	loginUser: (email, password) => dispatch(loginUser({ email, password })),
	registerUser: (email, password, fullName, avatarUrl) =>
		dispatch(registerUser({ email, password, fullName, avatarUrl })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
