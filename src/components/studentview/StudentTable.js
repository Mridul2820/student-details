import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import data from '../../data'

const StudentTable = () => {
    const [students] = useState(data)

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
                    {students.map(student => (
                        <tr key={student.id} >
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.school}</td>
                            <td>{student.class}</td>
                            <td>{student.division}</td>
                            <td>{student.active ? "Active" : "Inactive"}</td>
                            <td>
                                <Link to="/student/edit" className="edit">
                                    Edit
                                </Link>
                                <span className="delete">Delete</span>
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

        &.edit {
            margin-right: 8px;
        }
    }
`

export default StudentTable
