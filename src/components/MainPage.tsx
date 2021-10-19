import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SemesterTable } from './SemesterTable';
import React, { useCallback, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { CourseContainer } from './CourseContainer';
import { CourseContext } from '../context/CourseContext';
import COURSES from '../json/courses.json';
import { CourseType } from '../interfaces/course';

export const MainPage = (): JSX.Element => {
	const [courses, setCourses] = useState<CourseType[]>(COURSES as CourseType[]);
	const [selectedCourses, setSelectedCourses] = useState<string>('');

	const onDelete = (event: number) => {
		// get name and remove from courses
		console.log('deleting button');
	};

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) {
			return;
		}
		console.log(result);
		const theCourses = courses;
		const theCourse = theCourses.splice(result.source.index, 1)[0];
		if (result.destination !== undefined) {
			theCourses.splice(result.destination?.index, 0, theCourse);
		}
		setCourses(theCourses);
	};

	return (
		<>
			<CourseContext.Provider value={courses}>
				<DragDropContext
					onDragEnd={onDragEnd}
				>
					<Container>
						<Row>
							<Col>
								Course Scheduler
							</Col>
							<Col>
								<Row>
									<Col>
										{/* concentration list */}
									</Col>
								</Row>
								<Row>
									<Col>
										{/* reqs */}
									</Col>
								</Row>
							</Col>
						</Row>
						<Row>
							<Col>
								<CourseContainer deleteFunc={onDelete}/>
							</Col>
							<Col>
								<SemesterTable />
							</Col>
						</Row>
					</Container>
				</DragDropContext>
			</CourseContext.Provider>
		</>
	);
};
