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
	const onBeforeCapture = useCallback(() => {
		console.log('before capture');
	}, []);

	const onBeforeDragStart = useCallback(() => {
		console.log('before drag start');
	}, []);

	const onDragStart = useCallback(() => {
		console.log('on drag start');
	}, []);

	const onDragUpdate = useCallback(() => {
		console.log('on drag update');
	}, []);

	const onDragEnd = (result: DropResult) => {
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
					onBeforeCapture={onBeforeCapture}
					onBeforeDragStart={onBeforeDragStart}
					onDragStart={onDragStart}
					onDragUpdate={onDragUpdate}
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
								<CourseContainer />
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
