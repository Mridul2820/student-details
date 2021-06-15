import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import { db } from '../../firebase/firebase'


const StudentTable = ({ students }) => {
    console.log("students", students);

    // const deleteStudent = (id) => {
    //     db.collection('students').doc(id).delete()
    // }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>School</th>
                        <th>Class</th>
                        <th>Division</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id} >
                            <td>{index + 1}</td>
                            <td>{student.value.name}</td>
                            <td>
                                {new Date().getFullYear() - new Date(student.value.date).getFullYear()}
                            </td>
                            <td>{student.value.school}</td>
                            <td>{student.value.classSt}</td>
                            <td>{student.value.division}</td>
                            <td>{student.value.active}</td>
                            <td>
                                <Link to="/student/edit" className="edit">
                                    Edit
                                </Link>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

const Table = styled.table`
    width: 100%;
    border: 1px solid black;
    border-spacing: 0;

    thead {
        background-color: #95BCF2;
    }

    th, td {
        border-left: 1px solid black;
        border-right: 1px solid black;
        padding: 5px 10px;
        text-align: left;
    }

    tr:nth-child(even) {
        background-color: #EEEEEE;
    }

    span, a {
        color: #5F7EAA;
        text-decoration: underline;
        cursor: pointer;

        &.edit {
            margin-right: 8px;
        }
    }
`

export default StudentTable
