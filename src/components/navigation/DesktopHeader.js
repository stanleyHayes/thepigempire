import React from "react";
import {Grid, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

import "../../App.css";


function DesktopHeader() {

    const useStyles = makeStyles(theme => {
        return {
            logo: {
                height: 50
            },
            logoContainer: {
                textAlign: "center"
            },
            owner: {
                fontWeight: 900
            },
            icon: {
                color: "#777777"
            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar variant="regular">
            <Grid container={true} justify="center" alignItems="center">

                <Grid item={true} lg={2} container={true}>
                    <Grid item={true}>
                        <Link to="/">
                            <img
                                height="100"
                                width="50"
                                className={`${classes.logo} brand-name`}
                                src={`${process.env.PUBLIC_URL}/logo512.png`}
                                alt="The Pig Empire logo"
                            />
                        </Link>
                    </Grid>
                </Grid>

                <Grid item={true} container={true} lg={8} justify="center" spacing={4}>
                    <Grid item={true}>
                        <Link to="/" className="nav-link uppercase font-size-medium font-weight-bold text">
                            Home
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/about" className="nav-link uppercase font-size-medium font-weight-bold text">
                            About
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/feed" className="nav-link uppercase font-size-medium font-weight-bold text">
                            Feed Mill
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/careers" className="nav-link uppercase font-size-medium font-weight-bold text">
                            Careers
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/news" className="nav-link uppercase font-size-medium font-weight-bold text">
                            News
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/contact" className="nav-link uppercase font-size-medium font-weight-bold text">
                            Contact us
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;
