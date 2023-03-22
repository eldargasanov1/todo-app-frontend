import { getTasksThunk, selectAllTasks } from 'entities/task';
import { connect } from 'react-redux';
import { Home } from './Home';

const mapStateToProps = state => ({
	tasks: selectAllTasks(state),
});
const mapDispatchToProps = dispatch => ({
	getTasks: () => dispatch(getTasksThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
