import React from 'react'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DashBoard from './pages/DashBoard'

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={DashBoard} exact />
                </Switch>
            </Router>
        </div>
    )
}

export default App
