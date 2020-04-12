import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "./views/HomePage/HomePage";
import ContactPage from "./views/ContactPage/ContactPage";

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path={process.env.PUBLIC_URL+'/landing-page'} component={LandingPage} />
            <Route path={process.env.PUBLIC_URL+"/profile-page"} component={ProfilePage} />
            <Route path={process.env.PUBLIC_URL+"/contact-us"} component={ContactPage} />
            <Route path={process.env.PUBLIC_URL+"/login-page"} component={LoginPage} />
            <Route path={process.env.PUBLIC_URL+"/all"} component={Components} />
            <Route path={process.env.PUBLIC_URL+"/"} component={HomePage} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
