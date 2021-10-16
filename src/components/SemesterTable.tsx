import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { useState } from 'react';

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
	const [semesters, setSemesters] = useState<number>(4);
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					{new Array(semesters).fill(0).map((e, i) => <th>{`${getSemesterStr(i + 1)} semester`}</th>)}
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>this</td>
					<td>is</td>
					<td>a</td>
					<td>table</td>
				</tr>
			</tbody>
		</Table>
	);
};
