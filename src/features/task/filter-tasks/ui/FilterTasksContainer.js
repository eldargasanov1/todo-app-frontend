import { changeFilter, getTasksThunk } from 'entities/task';
import { connect } from 'react-redux';
import { FilterTasks } from './FilterTasks';

const mapStateToProps = state => ({
	filter: state.tasks.filter,
});
const mapDispatchToProps = dispatch => ({
	changeFilter: filter => {
		dispatch(changeFilter({ filter: filter }));
		dispatch(getTasksThunk());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterTasks);
