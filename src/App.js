import React from 'react'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DashBoard from './pages/DashBoard'

import UserContext from './context/userContext'
import useAuthListener from './hooks/useAuthlistner'

const App = () => {
    const { user } = useAuthListener()

    return (
        <UserContext.Provider value={{ user }}>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={DashBoard} exact />
                </Switch>
            </Router>
        </UserContext.Provider>
    )
}

export default App
