import 'bootstrap/dist/css/bootstrap.min.css';
import { Draggable } from 'react-beautiful-dnd';
import React from 'react';

export const Course = (props: { name: string, ind: number }): JSX.Element =>
	<>
		<Draggable draggableId={`course-${props.name}`} index={props.ind} key={props.ind}>
			{(prov, snapshot) => (
				<div>
					{props.name}
				</div>
			)}
		</Draggable>
	</>;
