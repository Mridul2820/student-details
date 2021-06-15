import styled from 'styled-components'
import { Button } from '../GlobalStyles'
import { useForm, Form } from '../hooks/useForm';


import Controls from './controls/Controls'
import * as collections from "../services/collcetion";

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
    hireDate: new Date(),
}

const StudentAdd = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        
    };


    const {
        values,
        setValues,
        handleInputChange,
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
                        value={values.school}
                        onChange={handleInputChange}
                        options={collections.getSchoolCollection()}
                    />
                </InputGrp>

                <InputGrp>
                    <label>Class</label>

                    <Controls.Select
                        name="classStu"
                        value={values.classStu}
                        onChange={handleInputChange}
                        options={collections.getClassCollection()}
                    />
                </InputGrp>

                <InputGrp>
                    <label>Division</label>

                    <Controls.Select
                        name="division"
                        value={values.division}
                        onChange={handleInputChange}
                        options={collections.getDivisionCollection()}
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

    label {
        width: 150px;
    }
`

export default StudentAdd
