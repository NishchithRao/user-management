import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './App'
import LoggedInRoute from './components/Auth/Protected/LoggedInRoute';
import Account from './pages/Account';
import Login from './pages/Login/index';
import Signup from './pages/Signup';

const Router = (props) => {
    return (
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" exact component={Signup} />
                        <LoggedInRoute path="/account" ><Account /></LoggedInRoute>
                        <LoggedInRoute path="/"><App /></LoggedInRoute>
                    </Switch>
                </BrowserRouter>
    )
}

export default Router
