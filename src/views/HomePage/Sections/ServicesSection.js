import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/homePage";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {ReactSVG} from "react-svg";
import lawnMowIcon from '../../../assets/img/svg/lawn-mower.svg';
import pruneIcon from '../../../assets/img/svg/pruning-shears.svg';
import wateringIcon from '../../../assets/img/svg/watering-can.svg';
import houseHoldIcon from '../../../assets/img/svg/household.svg';


const useStyles = makeStyles(styles);

export default function ServicesSection(){
    const classes = useStyles();
    return(
        <section className={classes.container}>

            <h2 className={classes.title}>What we do</h2>
            <GridContainer>
                <GridItem className={classes.card} xs={12} sm={3}>
                    <ReactSVG className={classes.svg} src={lawnMowIcon} />
                    <h4 className={classes.subtitle}>Lawn Mowing</h4>
                    <p className={classes.paragraph}>Keeping lawns neat and trim, plus clean up.</p>
                </GridItem>
                <GridItem xs={12} sm={3} className={classes.card}>
                    <ReactSVG className={classes.svg} src={pruneIcon} />
                    <h4 className={classes.subtitle}>Garden Pruning</h4>
                    <p className={classes.paragraph}>Prune your garden trees and plants.</p>
                </GridItem>

                <GridItem xs={12} sm={3} className={classes.card}>
                    <ReactSVG className={classes.svg} src={wateringIcon} />
                    <h4 className={classes.subtitle}>Garden Maintenance</h4>
                    <p className={classes.paragraph}>Maintain you plants and trees.</p>
                </GridItem>

                <GridItem xs={12} sm={3} className={classes.card}>
                    <ReactSVG className={classes.svg} src={houseHoldIcon} />
                    <h4 className={classes.subtitle}>Strata/Building Cleaning</h4>
                    <p className={classes.paragraph}>Clean and maintain common areas.</p>
                </GridItem>
            </GridContainer>
        </section>
    )
}
