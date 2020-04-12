import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Snackbar } from '@material-ui/core';
import { Alert } from "@material-ui/lab";
import { withRouter } from 'react-router-dom';

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

function ContactForm({history}) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const [userName,setUserName]= useState('');
    const [userEmail,setUserEmail]= useState('');
    const [userMessage,setUserMessage]= useState('');
    const [alertOpen,setAlertOpen]= useState(false);
    const [alertObject, setAlertObject]= useState({
        message:'This is a success message!',
        type:'success'
    });

    useEffect(()=> emailjs.init("user_y6S4Mel3oZRuqVXEnXP6G"),
        [])

    function handleClose() {
        setAlertOpen(false);
    }

    function sendEmail(e) {
        e.preventDefault();

        var template_params = {
            "reply_to": "thesydneygardener@gmail.com",
            "from_name": userName+"("+userEmail+")",
            "to_name": "Admin",
            "message_html": userMessage
        }

        var service_id = "gmail";
        var template_id = "template_nBPVOlal";
        emailjs.send(service_id, template_id, template_params)
            .then((res)=>{
                console.log(res);
                if(res.status === '200'){
                    setAlertOpen(true);
                    setAlertObject({
                        message:'Message successfully submitted!',
                        type:'success'
                    });
                    setTimeout(()=>history.push('/'),1000)
                }
                setAlertOpen(true);
                setAlertObject({
                    message:res.text,
                    type:'info'
                });
            }).catch((e)=>{
            setAlertOpen(true);
            setAlertObject({
                message:e,
                type:'error'
            })
        })
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
                                    id="user_name"
                                    type="text"
                                    name="user_name"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "text",
                                        name: "user_name",
                                        value: userName,
                                        onChange: (e) => setUserName(e.target.value),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <People className={classes.inputIconsColor} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <CustomInput
                                    labelText="Email..."
                                    id="user_email"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "email",
                                        name: "user_email",
                                        value: userEmail,
                                        onChange: (e) => setUserEmail(e.target.value),
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
                                    value={userMessage}
                                    onChange={(e) => setUserMessage(e.target.value)}
                                />
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                                <Button simple color="primary" size="lg" type="submit" value="Send">
                                    Submit
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                    <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={alertObject.type}>
                            {alertObject.message}
                        </Alert>
                    </Snackbar>
                </GridItem>
            </GridContainer>

    );
}

export default withRouter(ContactForm);
