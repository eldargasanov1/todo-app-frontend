import { removeTaskThunk } from 'entities/task';
import { connect } from 'react-redux';
import { DeleteTask } from './DeleteTask';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
	onClick: id => dispatch(removeTaskThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTask);
