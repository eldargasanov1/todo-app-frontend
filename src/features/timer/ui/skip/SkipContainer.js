import { connect } from 'react-redux';
import { Skip } from './Skip';

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, { setIsCounting, setIsWorkTime }) => ({
	onClick: () => {
		setIsWorkTime(prev => !prev);
		setIsCounting(false);
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Skip);
