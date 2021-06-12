import React from 'react'
import styled from 'styled-components'
import { Button } from '../../GlobalStyles';

const ViewHeader = () => {
    return (
        <Container>
            <Fields>
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Age" />
                <select name="School" id="school">
                    <option value="" disabled selected>School</option>
                    <option value="Lead School">Lead School</option>
                    <option value="School 2">School 2</option>
                    <option value="School 3">School 3</option>
                </select>
                <select name="Class" id="class">
                    <option value="" disabled selected>Class</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <select name="Division" id="division">
                    <option value="" disabled selected>Division</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </Fields>
            <Button>Search</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
const Fields = styled.div`
    margin-right: 20px;

    input, select {
        padding: 5px;
        margin-right: 10px;
        width: 150px;
    }

    option[value=""][disabled] {
        display: none;
    }
`


export default ViewHeader
