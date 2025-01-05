import {BrowserRouter as Router, Route, Switch} from "react-router";
import React from "react";
import Landing from "./landing/landing";
import Login from "./login/login";
import Signup from "./signup/signup";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route component={Landing} />
            </Switch>
        </Router>
    );
};

export default Routes;
