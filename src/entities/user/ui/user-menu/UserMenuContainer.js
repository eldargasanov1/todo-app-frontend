import { connect } from 'react-redux';
import { UserMenu } from './UserMenu';

const mapStateToProps = state => ({
	fullName: state.user.userInfo?.fullName,
	avatarUrl: state.user.userInfo?.avatarUrl,
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
