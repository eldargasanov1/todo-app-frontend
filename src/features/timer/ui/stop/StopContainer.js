import { connect } from 'react-redux';
import { Stop } from './Stop';

const mapStateToProps = state => ({});
const mapDispatchToProps = (
	dispatch,
	{ setTimeLeft, setIsCounting, startTime }
) => ({
	onClick: () => {
		setTimeLeft(startTime);
		setIsCounting(false);
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Stop);
