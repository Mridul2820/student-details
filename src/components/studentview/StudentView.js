import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import StudentTable from './StudentTable'
import ViewHeader from './ViewHeader'
import Pagination from './Pagination'

import { Button } from '../../GlobalStyles';
import { GrDocumentExcel } from 'react-icons/gr'
// import { fetchStudentData } from '../../services/firebase'
import { db } from '../../firebase/firebase'


const StudentView = () => {
    const [students, setStudents] = useState([])
    const [searchName, setSearchName] = useState('')

    useEffect(() => {
        db.collection("students")
            .get()
            .then((querySnapshot) => {
                let stu = [];
                querySnapshot.docs.map((doc) =>
                    stu.push({ id: doc.id, value: doc.data() })
                );
                setStudents(stu);
            });
            // eslint-disable-next-line
    }, [db]);



    return (
        <Container>
            <Header>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
            </Header>
            <StudentTable students={students}/>
            <Pagination />

            <Button><GrDocumentExcel/>Download Excel</Button>
        </Container>
    )
}

const Container = styled.div`
    padding: 20px 50px;
    width: 100%;

    ${Button} {
        display: flex;
        align-items: center;

        svg {
            margin-right: 5px;
        }
    }
`

const Header = styled.div`

` 

export default StudentView
