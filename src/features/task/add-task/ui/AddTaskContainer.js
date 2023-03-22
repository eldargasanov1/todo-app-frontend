import { addTaskThunk } from 'entities/task';
import { connect } from 'react-redux';
import { AddTask } from './AddTask';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
	onAdd: title => dispatch(addTaskThunk(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
