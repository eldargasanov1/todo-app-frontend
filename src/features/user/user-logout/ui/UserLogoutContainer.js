import { logoutUser } from 'entities/user';
import { connect } from 'react-redux';
import { UserLogout } from './UserLogout';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
	onClick: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogout);
