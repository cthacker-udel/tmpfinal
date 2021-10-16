import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import COURSES from '../json/courses.json';
import { CourseType } from '../interfaces/course';
import { Course } from './Course';
import { Droppable } from 'react-beautiful-dnd';

export const CourseContainer = (): JSX.Element => {
	const [courses, setCourses] = useState<CourseType[]>(COURSES as CourseType[]);
	return (
		<>
			<Droppable droppableId="coursecontainer">
				{(prov, snap) =>
					<ListGroup>
						{courses.map((e, i) => <Course name={e.name} ind={i} />)}
					</ListGroup>
				}
			</Droppable>
		</>
	);
};
