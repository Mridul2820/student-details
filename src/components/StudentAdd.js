import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../GlobalStyles'
import { db } from '../firebase/firebase'

const StudentAdd = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [school, setSchool] = useState('School A')
    const [classSt, setClassSt] = useState('3')
    const [grade, setGrade] = useState('A')
    const [active, setActive] = useState('Active')

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("students")
            .add({
                name: name,
                date: date,
                school: school,
                classSt: classSt,
                grade: grade,
                active: active,
            })
            .then(() => {
                alert("Student Added");
            })
            .catch((error) => {
                alert(error.message);
            });

        setName("");
        setDate("");
        setGrade("Active");
    };

    // console.log('classSt', classSt);

    return (
        <Container>
            <h1>Add Student</h1>
            <Form onSubmit={handleSubmit}>
                <InputGrp>
                    <label>Full Name</label>
                    <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" 
                        placeholder="Name" 
                        required
                    />
                </InputGrp>
                <InputGrp>
                    <label>Date of Birth</label>
                    <input 
                        type="date" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </InputGrp>

                <InputGrp>
                    <label>School</label>
                    
                    <select onChange={e => setSchool(e.target.value)} required>
                        {/* <option value="" disabled defaultValue>School Name</option> */}
                        <option value="School A">School A</option>
                        <option value="School B">School B</option>
                        <option value="School C">School C</option>
                    </select>
                </InputGrp>
                <InputGrp>
                    <label>Class</label>
                    <select onChange={e => setClassSt(e.target.value)} required>
                        {/* <option value="" disabled defaultValue>Class</option> */}
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </InputGrp>
                <InputGrp>
                    <label>Division</label>
                    <select onChange={e => setGrade(e.target.value)} required>
                        {/* <option value="" disabled defaultValue>Division</option> */}
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </InputGrp>
                <InputGrp>
                    <label>Status</label>
                    <Radio>
                        <input 
                            type="radio" 
                            id="active" 
                            name="status" 
                            value="Active" 
                            onClick={() => setActive('Active')}
                        />
                        <label>Active</label>

                        <input 
                            type="radio" 
                            id="inactive" 
                            name="status" 
                            value="Inactive" 
                            onClick={() => setActive('Inactive')}
                        />
                        <label>Inactive</label>
                    </Radio>
                </InputGrp>
                <InputGrp>
                    <label></label>
                    <Button type="submit">Save</Button>
                </InputGrp>
            </Form>
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

const Form = styled.form``

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


export default StudentAdd
