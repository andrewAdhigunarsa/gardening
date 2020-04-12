import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import ServicesSection from "./Sections/ServicesSection";
import ContactForm from "../ContactPage/Sections/ContactForm";
import Divider from "@material-ui/core/Divider";
// Sections for this page


// @material-ui/icons

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HomePage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="TheSydneyGardener.com.au"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 100,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax filter image={require("assets/img/lawnFence.jpeg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Your Garden Story Starts With Us.</h1>
                            <h4>
                                Every garden needs tender loving care, treat your garden with Love.
                            </h4>
                            <br />
                            <Button
                                color="danger"
                                size="lg"
                                href={'tel:0402218975'}
                                rel="noopener noreferrer"
                            >
                                 Call 0402 218 975
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <ServicesSection />
            <Divider />
            <div className={classes.container}>
                <br/>
                <br/>
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
}
