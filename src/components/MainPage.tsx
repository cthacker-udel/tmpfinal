import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SemesterTable } from './SemesterTable';
import React, { MouseEvent, MouseEventHandler, useCallback, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { CourseContainer } from './CourseContainer';
import { CourseContext } from '../context/CourseContext';
import COURSES from '../json/courses.json';
import { CourseType } from '../interfaces/course';

export const MainPage = (): JSX.Element => {
	const [courses, setCourses] = useState<CourseType[]>(COURSES as CourseType[]);
	const [selectedCourses, setSelectedCourses] = useState<string>('');
	const [deletedCourses, setDeletedCourses] = useState<CourseType[]>([]);

	const onDelete = (name: string) => {
		// get name and remove from courses
		const ind = courses.map((e, i) => e.name === name ? i : -1).filter(e => e !== -1)[0];
		const theCourses = courses;
		const course = theCourses.splice(ind, 1)[0];
		const delCourses = [...deletedCourses, course];
		setDeletedCourses(delCourses);
		setCourses(theCourses);
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
