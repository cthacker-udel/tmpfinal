import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SemesterTable } from './SemesterTable';
import React, { useCallback, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { CourseContainer } from './CourseContainer';
import { CourseContext } from '../context/CourseContext';
import COURSES from '../json/courses.json';
import { CourseType } from '../interfaces/course';
import { SemesterCourseContext } from '../context/SemesterCourseContext';

export const MainPage = (): JSX.Element => {
	const [courses, setCourses] = useState<CourseType[]>(COURSES as CourseType[]);
	const [selectedCourses, setSelectedCourses] = useState<string>('');
	const [semesterCourses, setSemesterCourses] = useState<CourseType[]>([]);

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) {
			return;
		}
		console.log(result);
		const theCourses = courses;
		const theCourse = theCourses.splice(result.source.index, 1)[0];
		if (result.destination.droppableId === 'coursecontainer') {
			theCourses.splice(result.destination?.index, 0, theCourse);
			setCourses(theCourses);
		} else if (result.destination.droppableId === 'semester-table') {
			const tmpSemesterCourses = [...semesterCourses, theCourse];
			setSemesterCourses(tmpSemesterCourses);
			setCourses(theCourses);
			console.log('running proper func');
		}
	};

	return (
		<>
			<CourseContext.Provider value={courses}>
				<SemesterCourseContext.Provider value={semesterCourses}>
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
									<CourseContainer />
								</Col>
								<Col>
									<SemesterTable />
								</Col>
							</Row>
						</Container>
					</DragDropContext>
				</SemesterCourseContext.Provider>
			</CourseContext.Provider>
		</>
	);
};
