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
                                            <p className="text-align-center text font-weight-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                                            <p className="text-align-center text font-weight-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                                            <p className="text-align-center text font-weight-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                                            <p className="text-align-center text font-weight-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                                    <p className="responsive-text text-align-center text font-weight-bold">
                                        Lorem Ipsum Dolor
                                    </p>
                                    <p className="text-align-center text font-size-medium font-weight-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item={true} xs={12} md={6}>
                            <ContactForm />
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </Layout>
    )
}

export default HomePage;
