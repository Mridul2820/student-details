import React from 'react'
import styled from 'styled-components'

import StudentTable from './StudentTable'
import ViewHeader from './ViewHeader'
import Pagination from './Pagination'

import { Button } from '../../GlobalStyles';
import { GrDocumentExcel } from 'react-icons/gr'

const StudentView = () => {
    return (
        <Container>
            <ViewHeader />
            <StudentTable/>
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

export default StudentView
