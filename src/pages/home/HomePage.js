import React from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid, Button} from "@material-ui/core";
import Slider from "react-slick";
import {ArrowForward} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import Facility from "../../components/shared/Facility";
import "../../App.css";

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
        </Layout>
    )
}

export default HomePage;
