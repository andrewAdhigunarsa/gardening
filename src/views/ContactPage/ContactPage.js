import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";


import image from "assets/img/lawn-blur.jpg";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import ContactForm from "./Sections/ContactForm";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {

    const classes = useStyles();

    const { ...rest } = props;
    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="TheSydneyGardener.com.au"
                rightLinks={<HeaderLinks />}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <ContactForm/>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
}
