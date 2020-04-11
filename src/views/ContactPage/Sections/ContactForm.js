import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";

import styles from "../../../assets/jss/material-kit-react/views/loginPage.js";
import {TextField} from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ContactForm() {

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();

    function sendEmail(e) {
        e.preventDefault();

        var template_params = {
            "reply_to": "reply_to_value",
            "from_name": "from_name_value",
            "to_name": "to_name_value",
            "message_html": "message_html_value"
        }

        var service_id = "gmail";
        var template_id = "template_nBPVOlal";
        emailjs.send(service_id, template_id, template_params);
    }

    return (

            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={7}>

                    <Card className={classes[cardAnimaton]}>
                        <form className={`contact-form ${classes.form}`} onSubmit={sendEmail}>
                            <CardHeader color="primary" className={classes.cardHeader}>
                                <h4>Contact us</h4>
                            </CardHeader>
                            <input type="hidden" name="contact_number"/>
                            <CardBody>
                                <CustomInput
                                    labelText="First Name..."
                                    id="first"
                                    type="text"
                                    name="user_name"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "text",
                                        name: "user_name",
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <People className={classes.inputIconsColor} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <CustomInput
                                    labelText="Email..."
                                    id="email"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "email",
                                        name: "user_email",
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Email className={classes.inputIconsColor} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <TextField
                                    id="standard-multiline-flexible"
                                    name="message"
                                    label="Message"
                                    fullWidth={true}
                                    multiline
                                    rowsMax="4"
                                />
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                                <Button simple color="primary" size="lg" type="submit" value="Send">
                                    Submit
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                </GridItem>
            </GridContainer>

    );
}
