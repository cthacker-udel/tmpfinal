import 'bootstrap/dist/css/bootstrap.min.css';
import { Draggable } from 'react-beautiful-dnd';
import React from 'react';

export const Course = (props: { name: string }): JSX.Element =>
	<>
		<Draggable draggableId="course-1" index={0}>
			{(prov, snapshot) => (
				<div>
					{props.name}
				</div>
			)}
		</Draggable>
	</>;
