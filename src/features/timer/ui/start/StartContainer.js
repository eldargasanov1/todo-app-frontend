import { connect } from 'react-redux';
import { Start } from './Start';

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, { setIsCounting }) => ({
	onClick: () => setIsCounting(true),
});

export default connect(mapStateToProps, mapDispatchToProps)(Start);
