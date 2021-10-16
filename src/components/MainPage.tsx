import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SemesterTable } from './SemesterTable';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { CourseContainer } from './CourseContainer';

export const MainPage = (): JSX.Element =>

	<DragDropContext
		onBeforeCapture={() => console.log('before capture')}
		onBeforeDragStart={() => console.log('before drag start')}
		onDragStart={() => console.log('ondrag start')}
		onDragUpdate={() => console.log('ondrag update')}
		onDragEnd={() => console.log('on drag end')}
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
	</DragDropContext>;
