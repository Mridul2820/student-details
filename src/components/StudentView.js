import React, { useState } from 'react'
import styled from 'styled-components'

import { Button } from '../GlobalStyles';

import { TableBody, TableRow, TableCell, Toolbar } from '@material-ui/core';
import Controls from "./controls/Controls";
import { getAllStudents, deleteStudent } from '../services/localStorage'
import useTable from '../hooks/useTable';
import data from '../data';
import { useHistory } from 'react-router-dom';


const StudentView = ({ setEditRecord }) => {
    const [records, setRecords] = useState([...data, ...getAllStudents()])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    console.log('records', records);

    const history = useHistory()

    const headCells = [
        { id: 'id', label: 'Id', disableSorting: true },
        { id: 'name', label: 'Name' },
        { id: 'age', label: 'Age' },
        { id: 'school', label: 'School' },
        { id: 'class', label: 'Class' },
        { id: 'division', label: 'Division' },
        { id: 'status', label: 'Status' },
        { id: 'options', label: 'Options', disableSorting: true },
    ]

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.name.toLowerCase().includes(target.value))
            }
        })
    }

    const handleEdit = (item) => {
        history.push('/student/edit')
        setEditRecord(item)
    }

    const handleDelete = (id) => {
        deleteStudent(id)
        setRecords([...data, ...getAllStudents()])
    }

    return (
        <Container>
            <Toolbar>
                <Controls.Input
                    label="Name"
                    onChange={handleSearch}
                />
            </Toolbar>
            <TblContainer>
                <TblHead />
                <TableBody>
                {recordsAfterPagingAndSorting().map(record => (
                    <TableRow key={record.id}>
                        <TableCell>{record.id + 1}</TableCell>
                        <TableCell>{record.name}</TableCell>
                        <TableCell>{new Date().getFullYear() - new Date(record.dob).getFullYear()}</TableCell>
                        <TableCell>{record.school}</TableCell>
                        <TableCell>{record.classStu}</TableCell>
                        <TableCell>{record.division}</TableCell>
                        <TableCell>{record.status}</TableCell>
                        <TableCell>
                            <Button onClick={() => handleEdit(record)}>
                                Edit
                            </Button>
                            <Button onClick={() => handleDelete(record.id)}>
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </TblContainer>
            <TblPagination ></TblPagination>
        </Container>
    )
}

const Container = styled.div`
    padding: 20px 50px;
    width: 100%;

    ${Button} {
        display: inline-flex;
        align-items: center;
        margin-top: 0;
        padding: 5px 8px;
        margin-right: 10px;

        svg {
            margin-right: 5px;
        }
    }

    table {
        width: 100%;
        border: 1px solid black;
        border-spacing: 0;
    }

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

    .MuiInputBase-input {
        width: 150px;
    }

    .MuiOutlinedInput-input {
        padding: 14px ;
    }

    .MuiToolbar-regular {
        min-height: 24px;
        padding: 0;
        margin-bottom: 10px;
    }
`


export default StudentView
