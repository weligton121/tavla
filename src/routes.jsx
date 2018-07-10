import React from 'react'
import {
    Route, Switch, Redirect,
} from 'react-router-dom'
import './main.scss'
import DepartureBoard from './containers/departureBoard/DepartureBoard'
import AdminPage from './containers/adminPage/AdminPage'
import App from './containers/App'

export const routes = (
    <div className="App">
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/dashboard" component={DepartureBoard} />
            <Route path="/admin" component={AdminPage} />
            <Redirect to="/rendering" />
        </Switch>
    </div>
)
