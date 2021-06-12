import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from '../components/Header'
import SideBar from '../components/SideBar'
import StudentView from '../components/StudentView'
import StudentAdd from '../components/StudentAdd'

const DashBoard = () => {

    return (
        <div>
            <Router>
                <Header />
                <Container>
                    <SideBar/>
                    <Switch>
                        <Route path="/students" component={StudentView} />
                        <Route path="/student/add" component={StudentAdd} />
                    </Switch>
                </Container>
            </Router>
        </div>
    )
}

const Container = styled.div`
    display: flex;
`


export default DashBoard
