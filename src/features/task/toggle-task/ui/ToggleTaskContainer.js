import { toggleTaskThunk } from 'entities/task';
import { connect } from 'react-redux';
import { ToggleTask } from './ToggleTask';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
	onClick: id => dispatch(toggleTaskThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTask);
