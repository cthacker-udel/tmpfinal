import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import COURSES from '../json/courses.json';
import { CourseType } from '../interfaces/course';
import { Course } from './Course';

export const CourseContainer = (): JSX.Element => {
	const [courses, setCourses] = useState<CourseType[]>(COURSES as CourseType[]);
	return (
		<ListGroup>
			{courses.map(e => <Course name={e.name} />)}
		</ListGroup>
	);
};
