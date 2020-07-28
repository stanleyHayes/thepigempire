import React from "react";
import {
    Divider,
    Grid,
    Container,
    Avatar
} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import "../../App.css";

function DrawerContent({handleDrawerClose}) {


    const useStyles = makeStyles(theme => {
        return {
            button: {
                textAlign: "center"
            },
            link: {
                color: "#777777",
                textDecoration: "none",
                fontFamily: 'Quicksand'
            },
            avatar: {
                width: 150,
                height: 150,
            },
            avatarContainer: {
                display: "flex",
                justifyContent: "center",
                marginBottom: 32
            },
            gridContainer: {
                paddingTop: 32,
                paddingBottom: 32
            },
            root: {
                backgroundColor: "white",
                minHeight: "100vh",
                width: '90vw'
            },
            expandPanel: {
                backgroundColor: "white"
            },
            content: {
                paddingLeft: 32,
                paddingRight: 32
            },
            grid: {
                marginTop: 16
            },
            icon: {
                fontSize: 24
            }
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Grid className={classes.grid} container={true} justify="flex-end" alignItems="center">
                    <Grid item={true} xs={1}>
                        <Close className={classes.icon} onClick={() => handleDrawerClose()}/>
                    </Grid>
                </Grid>
                <Grid
                    container={true}
                    justify="center"
                    alignItems="flex-start">
                            <Grid item={true}>
                                    <Avatar className={classes.avatar} src={`${process.env.PUBLIC_URL}/logo512.png`}/>
                                <p className="text-align-center text font-size-medium uppercase font-weight-bold">The Pig Empire</p>
                            </Grid>

                </Grid>

                <Grid className={classes.gridContainer} container={true} justify="flex-start">
                    <Grid item={true} xs={12}>
                        <div className={classes.content}>
                            <p>
                                <Link to="/"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Home
                                </Link>
                            </p>

                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/about"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    About
                                </Link>
                            </p>
                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/feed"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Feed Mill
                                </Link>
                            </p>

                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/careers"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Careers
                                </Link>
                            </p>
                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/news"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    News
                                </Link>
                            </p>
                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/contact"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Contact Us
                                </Link>
                            </p>
                            <Divider variant="fullWidth"/>

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default DrawerContent;
