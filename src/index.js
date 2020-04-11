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
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/contact-us" component={ContactPage} />
            <Route path="/login-page" component={LoginPage} />
            <Route path="/all" component={Components} />
            <Route path="/" component={HomePage} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
