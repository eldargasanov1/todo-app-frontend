import { toggleTaskThunk } from 'entities/task';
import { connect } from 'react-redux';
import { Check } from './Check';

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, { id, setTask, completed }) => ({
	onClick: () => {
		dispatch(toggleTaskThunk(id));
		completed && setTask(prev => ({ ...prev, completed: !prev.completed }));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Check);
