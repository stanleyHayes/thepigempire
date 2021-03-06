import React from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid, Button, Card, CardContent} from "@material-ui/core";
import Slider from "react-slick";
import {ArrowForward} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import Facility from "../../components/shared/Facility";
import "../../App.css";
import ContactForm from "../../components/shared/ContactForm";

const HomePage = () => {

    const useStyles = makeStyles(theme => {
        return {
            button: {
                fontFamily: "Quicksand",
                color: "darkblue",
                fontWeight: "bold"
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <div>
                <Slider dots={true} arrows={false} autoplay={true} autoplaySpeed={5000} speed={2000} fade={true}>

                    <div className="responsive-height">
                        <img alt="Carousel" className="responsive-image"
                             src={`${process.env.PUBLIC_URL}/images/image-1.jpg`}/>
                    </div>

                    <div className="responsive-height">
                        <img alt="Carousel" className="responsive-image"
                             src={`${process.env.PUBLIC_URL}/images/image-2.jpg`}/>
                    </div>

                    <div className="responsive-height">
                        <img alt="Carousel" className="responsive-image"
                             src={`${process.env.PUBLIC_URL}/images/image-3.jpg`}/>
                    </div>

                    <div className="responsive-height">
                        <img alt="Carousel" className="responsive-image"
                             src={`${process.env.PUBLIC_URL}/images/image-4.jpg`}/>
                    </div>
                    <div className="responsive-height">
                        <img alt="Carousel" className="responsive-image"
                             src={`${process.env.PUBLIC_URL}/images/image-5.jpg`}/>
                    </div>

                    <div className="responsive-height">
                        <img alt="Carousel" className="responsive-image"
                             src={`${process.env.PUBLIC_URL}/images/image-6.jpg`}/>
                    </div>
                </Slider>
            </div>

            <section className="light-background section padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">services</p>
                        </Grid>

                        <Grid item={true} xs={12} md={6} lg={4}>
                            <div className="shadow">
                                <Card className={classes.card} raised={true} elevation={0} variant="outlined">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/mission.svg`}
                                                    alt="Mission logo"/>
                                            </div>
                                            <p className="font-weight-bold title center-align uppercase grey-text">Lorem Ipsum</p>
                                            <p className="summary center-align">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>


                        <Grid item={true} xs={12} md={6} lg={4}>
                            <div className="shadow">
                                <Card className={classes.card} raised={true} elevation={0} variant="outlined">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/vision.svg`}
                                                    alt="Mission logo"/>
                                            </div>
                                            <p className="font-weight-bold title center-align uppercase grey-text">Lorem Ipsum</p>
                                            <p className="summary center-align">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>


                        <Grid item={true} xs={12} md={6} lg={4}>
                            <div className="shadow">
                                <Card className={classes.card} raised={true} elevation={4} variant="outlined">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/vision.svg`}
                                                    alt="Mission logo"/>
                                            </div>
                                            <p className="title center-align uppercase font-weight-bold grey-text">Lorem Ipsum</p>
                                            <p className="summary center-align">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>

                    </Grid>
                </Container>
            </section>

            <section className="padding-vertical-huge">
                <Container>
                    <Grid container={true}>
                        <Grid item={true} xs={12}>
                            <p className="sub-header text uppercase font-weight-bold">Our Facilities</p>
                        </Grid>
                    </Grid>

                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4}>
                            <Facility name={"Lorem Ipsum"}
                                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                                      image={`${process.env.PUBLIC_URL}/images/image-1.jpg`}/>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Facility name={"Lorem Ipsum"}
                                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                                      image={`${process.env.PUBLIC_URL}/images/image-1.jpg`}/>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Facility name={"Lorem Ipsum"}
                                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                      image={`${process.env.PUBLIC_URL}/images/image-1.jpg`}/>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Facility name={"Lorem Ipsum"}
                                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                      image={`${process.env.PUBLIC_URL}/images/image-1.jpg`}/>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Facility name={"Lorem Ipsum"}
                                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                      image={`${process.env.PUBLIC_URL}/images/image-1.jpg`}/>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Facility name={"Lorem Ipsum"}
                                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                      image={`${process.env.PUBLIC_URL}/images/image-1.jpg`}/>
                        </Grid>
                    </Grid>

                    <div className="margin-top-large">
                        <Grid container={true} justify="flex-end">
                            <Grid item={true} xs={8} md={4} lg={3}>
                                <Button
                                    className={classes.button}
                                    variant="text"
                                    size="large"
                                    endIcon={<ArrowForward/>}>
                                    <Link className="nav-link uppercase font-weight-bold" to="/facilities">
                                        See all facilities
                                    </Link>
                                </Button>
                            </Grid>

                        </Grid>
                    </div>
                </Container>
            </section>

            <section className="padding-vertical-huge light-background">
                <Container>

                    <Grid container={true}>
                        <Grid item={true} xs={12}>
                            <p className="sub-header text uppercase font-weight-bold">Our Values</p>
                        </Grid>
                    </Grid>

                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={6}>
                            <div className="shadow">
                                <Card variant="outlined">
                                    <CardContent>
                                        <div className="text-align-center">
                                            <img
                                                className="rounded-image"
                                                alt="Happy Logo"
                                                width={70}
                                                height={70}
                                                src={`${process.env.PUBLIC_URL}/images/happy.svg`}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-align-center text font-weight-bold">Lorem ipsum</p>
                                            <p className="text-align-center text font-weight-500">Lorem ipsum dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>

                        <Grid item={true} xs={12} md={6}>
                            <div className="shadow">
                                <Card variant="outlined">
                                    <CardContent>
                                        <div className="text-align-center">
                                            <img
                                                className="rounded-image"
                                                alt="Happy Logo"
                                                width={70}
                                                height={70}
                                                src={`${process.env.PUBLIC_URL}/images/happy.svg`}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-align-center text font-weight-bold">Lorem ipsum</p>
                                            <p className="text-align-center text font-weight-500">Lorem ipsum dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>

                        <Grid item={true} xs={12} md={6}>
                            <div className="shadow">
                                <Card variant="outlined">
                                    <CardContent>
                                        <div className="text-align-center">
                                            <img
                                                className="rounded-image"
                                                alt="Happy Logo"
                                                width={70}
                                                height={70}
                                                src={`${process.env.PUBLIC_URL}/images/happy.svg`}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-align-center text font-weight-bold">Lorem ipsum</p>
                                            <p className="text-align-center text font-weight-500">Lorem ipsum dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>

                        <Grid item={true} xs={12} md={6}>
                            <div className="shadow">
                                <Card variant="outlined">
                                    <CardContent>
                                        <div className="text-align-center">
                                            <img
                                                className="rounded-image"
                                                alt="Happy Logo"
                                                width={70}
                                                height={70}
                                                src={`${process.env.PUBLIC_URL}/images/happy.svg`}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-align-center text font-weight-bold">Lorem ipsum</p>
                                            <p className="text-align-center text font-weight-500">Lorem ipsum dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="padding-vertical-huge">
                <Container>
                    <Grid container={true}>
                        <Grid item={true} xs={12}>
                            <p className="sub-header text uppercase font-weight-bold">Contact Us</p>
                        </Grid>
                    </Grid>
                    <Grid container={true} justify="center" spacing={4}>

                        <Grid item={true} xs={12} md={6}>
                            <div className="center-vertical">
                                <div>
                                    <p className="responsive-text text-align-center text font-weight-500">
                                        Lorem Ipsum Dolor
                                    </p>
                                    <p className="text-align-center text font-size-large font-weight-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item={true} xs={12} md={6}>
                            <ContactForm/>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="section light-background">
                <Container>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">
                                Partners
                            </p>
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            <div className="shadow">
                                <Card raised={false} elevation={0} variant="outlined">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className="rounded-image"
                                                    src={`${process.env.PUBLIC_URL}/images/happy.svg`}
                                                    alt="People logo"/>
                                            </div>
                                            <p className="font-size-medium font-weight-bold center-align uppercase grey-text">Our
                                                People</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>

                        <Grid item={true} xs={12} md={3}>
                            <div className="shadow">
                                <Card raised={false} elevation={0} variant="outlined">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className="rounded-image"
                                                    src={`${process.env.PUBLIC_URL}/images/behavior.svg`}
                                                    alt="Decision making logo"/>
                                            </div>
                                            <p className="font-size-medium font-weight-bold center-align uppercase grey-text">Our
                                                Conduct</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            <div className="shadow">
                                <Card raised={false} elevation={0} variant="outlined">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className="rounded-image"
                                                    src={`${process.env.PUBLIC_URL}/images/policy.svg`}
                                                    alt="Policy logo"/>
                                            </div>
                                            <p className="font-size-medium font-weight-bold center-align uppercase grey-text">Our
                                                Policies</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            <div className="shadow">
                                <Card raised={false} elevation={0} variant="outlined">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className="rounded-image"
                                                    src={`${process.env.PUBLIC_URL}/images/decision-making.svg`}
                                                    alt="Mission logo"/>
                                            </div>
                                            <p className="font-size-medium center-align uppercase grey-text font-weight-bold">Our
                                                Innovative
                                                approach</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </Layout>
    )
}

export default HomePage;
