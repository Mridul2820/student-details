import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from '../components/Header'
import SideBar from '../components/SideBar'
import StudentView from '../components/studentview/StudentView'
import StudentAdd from '../components/StudentAdd'
import StudentEdit from '../components/StudentEdit';

const DashBoard = () => {

    return (
        <Router>
            <Header />
            <Container>
                <SideBar/>
                <Switch>
                    <Route path="/students" component={StudentView} />
                    <Route path="/student/add" component={StudentAdd} />
                    <Route path="/student/edit" component={StudentEdit} />
                </Switch>
            </Container>
        </Router>
    )
}

const Container = styled.div`
    display: flex;
`


export default DashBoard
