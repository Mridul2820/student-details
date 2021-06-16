import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from '../components/Header'
import SideBar from '../components/SideBar'
import StudentView from '../components/StudentView'
import StudentAdd from '../components/StudentAdd'
import StudentEdit from '../components/StudentEdit';
import { useState } from 'react';

const DashBoard = () => {
    const [editRecord, setEditRecord] = useState(null)

    console.log('editRecord', editRecord);

    return (
        <Router>
            <Header />
            <Container>
                <SideBar/>
                <Switch>
                    <Route path="/students">
                        <StudentView setEditRecord={setEditRecord}/>
                    </Route>
                    <Route path="/student/add" >
                        <StudentAdd />
                    </Route>
                    <Route path="/student/edit">
                        <StudentEdit editRecord={editRecord} />
                    </Route>
                </Switch>
            </Container>
        </Router>
    )
}

const Container = styled.div`
    display: flex;
`


export default DashBoard
