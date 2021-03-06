import 'bootstrap/dist/css/bootstrap.min.css';
import { Draggable } from 'react-beautiful-dnd';
import React, { MouseEventHandler } from 'react';
import { ListGroup, OverlayTrigger, Popover, Image, Button } from 'react-bootstrap';


export const Course = (props: { name: string, ind: number }): JSX.Element =>
	<>
		<Draggable draggableId={props.name} index={props.ind} key={props.name}>
			{(prov) => (
				<>
					<ListGroup.Item ref={prov.innerRef} {...prov.draggableProps} {...prov.dragHandleProps}>{`${props.name}`}</ListGroup.Item>
				</>
			)}
		</Draggable>
	</>;
