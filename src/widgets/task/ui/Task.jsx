import { ButtonGroup } from '@mui/material';
import { TaskEntity } from 'entities/task';
import { DeleteTask, StartTask, ToggleTask } from 'features/task';

export const Task = ({ _id, title, subtitle, completed }) => {
	const after = (
		<ButtonGroup>
			<StartTask id={_id} />
			<DeleteTask id={_id} />
		</ButtonGroup>
	);

	return (
		<TaskEntity
			id={_id}
			title={title}
			subtitle={subtitle}
			before={<ToggleTask id={_id} completed={completed} />}
			after={after}
		/>
	);
};
