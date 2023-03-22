import { authMe } from 'entities/user';
import { connect } from 'react-redux';
import { Routing } from './Routing';

const mapStateToProps = state => ({
	isAuth: Boolean(state.user.userInfo),
});
const mapDispatchToProps = dispatch => ({
	authMe: () => dispatch(authMe()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
