import React from 'react'
import { Route, Switch, BrowserRouter,Redirect } from 'react-router-dom';
import App from './App'
import LoggedInRoute from './components/Auth/Protected/LoggedInRoute';
import { decodeToken } from './helpers/methods';
import Account from './pages/Account';
import Login from './pages/Login/index';
import Signup from './pages/Signup';
import Picture from './pages/Signup/Picture';
import Update from './pages/Update';

const Router = (props) => {
    return (
                <BrowserRouter>
                    <Switch>
                        <LoggedInRoute path="/update/:id" exact>
                            <Update/>
                            </LoggedInRoute>
                        <Route path="/login" component={Login} />
                        <Route path="/create" exact component={Signup} />
                        <LoggedInRoute path="/create/picture/:id" exact component={Picture} />
                        <LoggedInRoute path="/account" ><Account /></LoggedInRoute>
                        <LoggedInRoute exact path="/">
                            {
                                decodeToken().role >0 ? <App/> : <Redirect to="/account"/>
                            }
                        </LoggedInRoute>
                    </Switch>
                </BrowserRouter>
    )
}

export default Router
