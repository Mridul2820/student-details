import React from 'react'
import styled from 'styled-components'
import { Button } from '../GlobalStyles'

const EditDeleteForm = () => {
    return (
        <Container>
            <InputGrp>
                <label>Full Name</label>
                <input type="text" placeholder="Name" />
            </InputGrp>
            <InputGrp>
                <label>Date of Birth</label>
                <input type="date" />
            </InputGrp>
            <InputGrp>
                <label>School</label>
                <select name="School" id="school">
                    <option value="" disabled defaultValue>School</option>
                    <option value="Lead School">Lead School</option>
                    <option value="School 2">School 2</option>
                    <option value="School 3">School 3</option>
                </select>
            </InputGrp>
            <InputGrp>
                <label>Class</label>
                <select name="Class" id="class">
                    <option value="" disabled defaultValue>Class</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </InputGrp>
            <InputGrp>
                <label>Division</label>
                <select name="Division" id="division">
                    <option value="" disabled defaultValue>Division</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </InputGrp>
            <InputGrp>
                <label>Status</label>
                <Radio>
                    <input type="radio" id="active" name="status" value="active"/>
                    <label>Active</label>
                    <input type="radio" id="inactive" name="status" value="inactive"/>
                    <label>Inactive</label>
                </Radio>
            </InputGrp>
            <InputGrp>
                <label></label>
                <Button>Save</Button>
            </InputGrp>
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

    ${Button} {
        display: flex;
        align-items: center;

        svg {
            margin-right: 5px;
        }
    }
`

const InputGrp  =styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;

    label {
        width: 150px;
    }

    input, select {
        padding: 5px;
        margin-right: 10px;
        width: 150px;
    }

    option[value=""][disabled] {
        display: none;
    }
`

const Radio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        width: unset;
    }

    label {
        width: unset;
        margin-right: 30px;
    }
`

export default EditDeleteForm
