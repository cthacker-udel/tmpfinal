import 'bootstrap/dist/css/bootstrap.min.css';
import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import { Button } from 'react-bootstrap';

export const Course = (props: { name: string, ind: number }): JSX.Element =>
	<>
		<Draggable draggableId={`course-${props.name}`} index={props.ind} key={props.name + 1}>
			{(prov, snapshot) => (
				<>
					<div
						ref={prov.innerRef}
						{...prov.draggableProps}
						{...prov.dragHandleProps}
					>
						<Button>{props.name}</Button>
					</div>
				</>
			)}
		</Draggable>
	</>;
