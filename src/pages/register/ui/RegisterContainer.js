import { connect } from 'react-redux';
import { Register } from './Register';

const mapStateToProps = state => ({
	isAuth: Boolean(state.user.userInfo),
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
