import React from 'react'
import styled from 'styled-components'
import EditDeleteForm from './EditDeleteForm'

const StudentEdit = () => {
    return (
        <Container>
            <h1>Add Student</h1>

            <EditDeleteForm />
        </Container>
    )
}

const Container = styled.div`
    padding: 20px 50px;
    width: 100%;

    h1 {
        border-bottom: 1px solid #000;
        font-size: 22px;
    }
`

export default StudentEdit
