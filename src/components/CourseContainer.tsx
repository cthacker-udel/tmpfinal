import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import { Course } from './Course';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { CourseContext } from '../context/CourseContext';

export const CourseContainer = (props: { deleteFunc: (arg: number) => void}): JSX.Element =>
	<>
		<CourseContext.Consumer>
			{value =>
				<Droppable droppableId="coursecontainer">
					{(prov) =>
						<ListGroup {...prov.droppableProps} ref={prov.innerRef}>
							{value.map((e, i) => <Course name={`${e.name}-${e.section}`} ind={i} deleteFunc={props.deleteFunc} />)}
							{prov.placeholder}
						</ListGroup>
					}
				</Droppable>
			}
		</CourseContext.Consumer>
	</>;
