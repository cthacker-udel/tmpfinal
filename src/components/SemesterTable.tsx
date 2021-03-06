import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import { Draggable, Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { SemesterCourseContext } from '../context/SemesterCourseContext';
import { Course } from './Course';

export const getSemesterStr = (semesterNum: number): string => {
	switch (semesterNum % 10) {
		case 1:
			return `${semesterNum}st`;
		case 2:
			return `${semesterNum}nd`;
		case 3:
			return `${semesterNum}rd`;
		default:
			return `${semesterNum}th`;
	}
};

export const SemesterTable = (): JSX.Element => {
	const [semesters, setSemesters] = useState<number>(1);
	return (
		<SemesterCourseContext.Consumer>
			{value =>
				<Droppable droppableId="semester-table">
					{(prov: DroppableProvided) => (

						<Table >
							<thead>
								<tr>
									{new Array(semesters).fill(0).map((e, i) => <th key={i}>{`${getSemesterStr(i + 1)} semester`}</th>)}
								</tr>
							</thead>
							<tbody {...prov.droppableProps} ref={prov.innerRef}>
								<tr>
									<ListGroup>
										{
											value.map((e, i) =>
												<ListGroup.Item>
													<Course name={`${e.name}-${e.section}`} ind={i} />
												</ListGroup.Item>
											)
										}
									</ListGroup>
								</tr>
							</tbody>
						</Table>
					)}
				</Droppable>
			}
		</SemesterCourseContext.Consumer>
	);
};
