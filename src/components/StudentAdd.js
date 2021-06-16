import styled from 'styled-components'
import { Button } from '../GlobalStyles'
import { useForm, Form } from '../hooks/useForm';


import Controls from './controls/Controls'
import * as collections from "../services/collcetion";
import * as storage from "../services/localStorage";

const statusItems = [
    { id: 'active', title: 'Active' },
    { id: 'inactive', title: 'Inactive' },
]

const initialFValues = {
    id: 0,
    name: '',
    dob: new Date('2010-01-01'),
    school: '',
    classStu: '',
    division: '',
    status: 'active',
}

const StudentAdd = () => {

    const validate = (fieldValues = values) => {
        let temp = { ...error }
        temp.name = fieldValues.name ? "" : "This field is required."
        temp.school = fieldValues.school.length !== 0 ? "" : "This field is required."
        temp.school = fieldValues.school.length !== 0 ? "" : "This field is required."
        temp.classStu = fieldValues.classStu.length !== 0 ? "" : "This field is required."
        temp.division = fieldValues.division.length !== 0 ? "" : "This field is required."
            setError({
            ...temp
        })

        return Object.values(temp).every(x => x === "")
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            window.alert('done')
            resetForm()
            storage.insertStudent(values)
        }
    }

    const {
        values,
        error, 
        setError,
        handleInputChange,
        resetForm
    } = useForm(initialFValues);

    return (
        <Container>
            <h1>Add Student</h1>
            <Form onSubmit={handleSubmit}>
                <InputGrp>
                    <label>Full Name</label>
                    <Controls.Input 
                        name="name"
                        label="Name"
                        value={values.name}
                        onChange={handleInputChange}
                        err={error.name}
                    />
                </InputGrp>
                <InputGrp>
                    <label>Date of Birth</label>
                    <Controls.DatePicker
                        name="dob"
                        value={values.dob}
                        onChange={handleInputChange}
                    />
                </InputGrp>

                <InputGrp>
                    <label>School</label>

                    <Controls.Select
                        name="school"
                        label="School"
                        value={values.school}
                        onChange={handleInputChange}
                        options={collections.getSchoolCollection()}
                        err={error.school}
                    />
                </InputGrp>

                <InputGrp>
                    <label>Class</label>

                    <Controls.Select
                        name="classStu"
                        label="Class"
                        value={values.classStu}
                        onChange={handleInputChange}
                        options={collections.getClassCollection()}
                        err={error.classStu}
                    />
                </InputGrp>

                <InputGrp>
                    <label>Division</label>

                    <Controls.Select
                        name="division"
                        label="Division"
                        value={values.division}
                        onChange={handleInputChange}
                        options={collections.getDivisionCollection()}
                        err={error.division}
                    />
                </InputGrp>

                <InputGrp>
                    <label>Status</label>
                    <Controls.RadioGroup 
                        name="status" 
                        value={values.status} 
                        onChange={handleInputChange}
                        items={statusItems}
                    />
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

const InputGrp  =styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;

    label, .MuiInputBase-input {
        width: 150px;
    }

    .MuiOutlinedInput-input {
        padding: 14px ;
    }

    .MuiFormHelperText-root {
        color: red;
    }
`

export default StudentAdd
