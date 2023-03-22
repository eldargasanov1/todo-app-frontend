import { connect } from 'react-redux';
import { Pause } from './Pause';

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, { setIsCounting }) => ({
	onClick: () => setIsCounting(false),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pause);
