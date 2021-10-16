import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SemesterTable } from './SemesterTable';
import React, { useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { CourseContainer } from './CourseContainer';

export const MainPage = (): JSX.Element => {
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

	const onDragEnd = useCallback(() => {
		console.log('on drag end');
	}, []);


	return (
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
	);
};
