import React, {useState} from "react";
import {Container, Grid, Card, CardContent, CardMedia} from "@material-ui/core";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import Layout from "../../components/layout/Layout";
import {makeStyles} from "@material-ui/styles";
import "../../App.css";
import ContactForm from "../../components/shared/ContactForm";
function ContactPage() {
    const useStyles = makeStyles(theme => {
        return {
            card: {
                minHeight: 300
            },
            button: {
                paddingTop: 16,
                paddingBottom: 16,
                marginTop: 16,
                backgroundColor: "black",
                color: "white"
            },
            image: {
                width: "100%",
                height: 250
            },
            mapContainer: {
                width: "100%",
                height: '100%'
            },
            divContainer: {
                backgroundColor: "white",
                borderRadius: 24,
                padding: 16
            }
        }
    });

    const classes = useStyles();

    const [selectedOffice, setSelectedOffice] = useState(null);

    const [viewPort, setViewPort] = useState({
        latitude: 7.9527706,
        longitude: -1.0307118,
        zoom: 5,
        width: '100%',
        height: '100%'
    });

    const offices = [
        {
            phone: "+233270048319",
            coordinates: [5.1054, -1.2466],
            address: "Cape Coast"
        },
        {
            phone: "+233555180048",
            coordinates: [5.55602, -0.1969],
            address: "Cape Coast"
        },
        {
            phone: "+233502595892",
            coordinates: [6.68848, -1.62443],
            address: "Cape Coast"
        }
    ]

    return (
        <Layout>
            <div>
                <section className="light-background padding-vertical-huge">
                    <Container>
                        <Grid container={true} justify="center">
                            <Grid item={true} xs={12}>
                                <p className="sub-header uppercase">Follow us on social media</p>
                            </Grid>

                            <Grid item={true} xs={2} md={1}>
                                <a href="https://" target="_blank" rel="noreferrer noopener">
                                    <img width={30} height={30}
                                         src={`${process.env.PUBLIC_URL}/images/linkedin.svg`}
                                         alt="Linkedin logo"/>
                                </a>
                            </Grid>
                            <Grid item={true} xs={2} md={1}>
                                <a href="https://" target="_blank" rel="noreferrer noopener">
                                    <img width={30} height={30}
                                         src={`${process.env.PUBLIC_URL}/images/facebook.svg`}
                                         alt="Facebook logo"/>
                                </a>
                            </Grid>
                            <Grid item={true} xs={2} md={1}>
                                <a href="https://" target="_blank" rel="noreferrer noopener">
                                    <img width={30} height={30} src={`${process.env.PUBLIC_URL}/images/twitter.svg`}
                                         alt="Twitter logo"/>
                                </a>
                            </Grid>
                            <Grid item={true} xs={2} md={1}>
                                <a href="https://" target="_blank" rel="noreferrer noopener">
                                    <img width={30} height={30}
                                         src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
                                         alt="Instagram logo"/>
                                </a>
                            </Grid>
                        </Grid>
                    </Container>
                </section>

                <section className="padding-vertical-huge">
                    <Container>
                        <Grid container={true} spacing={3}>
                            <Grid item={true} xs={12}>
                                <p className="sub-header uppercase">Contacts</p>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <div className="shadow">
                                    <Card elevation={0} raised={true} variant="elevation">
                                        <CardContent>
                                            <div className="text-align-center">
                                                <img height="25" width="25" alt="Location Icon"
                                                     src={`${process.env.PUBLIC_URL}/images/location.svg`}/>
                                            </div>
                                            <p className="text-align-center uppercase font-weight-bold dark-grey-text">
                                                Our Address
                                            </p>
                                            <p className="text-align-center text">
                                                The Pig Empire Office, Cape Coast
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <div className="shadow">
                                    <Card elevation={0} raised={true} variant="elevation">
                                        <CardContent>
                                            <div className="text-align-center">
                                                <img height="25" width="25" alt="Location Icon"
                                                     src={`${process.env.PUBLIC_URL}/images/mail.svg`}/>
                                            </div>
                                            <p className="font-weight-bold text-align-center uppercase dark-grey-text">
                                                Email Us
                                            </p>
                                            <p className="text-align-center text">
                                                info@thepigempire.org
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <div className="shadow">
                                    <Card elevation={0} raised={true} variant="elevation">
                                        <CardContent>
                                            <div className="text-align-center">
                                                <img height="25" width="25" alt="Location Icon"
                                                     src={`${process.env.PUBLIC_URL}/images/phone.svg`}/>
                                            </div>
                                            <p className="font-weight-bold text-align-center uppercase dark-grey-text">
                                                Call Us
                                            </p>
                                            <p className="text-align-center text">
                                                +233270048319
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>

                <section className="padding-vertical-huge light-background">
                    <Container>

                        <Grid container={true}>
                            <Grid item={true} xs={12}>
                                <p className="sub-header uppercase">Visit our offices</p>
                            </Grid>
                        </Grid>

                        <Grid container={true} spacing={4} justify="space-around">
                            <Grid item={true} xs={12} md={4}>
                                <Card elevation={1} raised={true} variant="elevation">
                                    <CardMedia
                                        className={classes.image}
                                        component="img"
                                        src={`${process.env.PUBLIC_URL}/images/office-hq.jpg`}/>
                                    <CardContent>
                                        <div className="margin-bottom-small">
                                            <img
                                                width="15"
                                                height="15"
                                                className="icon"
                                                alt="Contact Icon"
                                                src={`${process.env.PUBLIC_URL}/images/pin.svg`}
                                            /> <span className="location">Accra </span> <span
                                            className="separator"> | </span> <span
                                            className="branch"> Headquarters</span>
                                        </div>

                                        <div className="margin-bottom-small">
                                            <img
                                                width="15"
                                                height="15"
                                                className="icon"
                                                alt="Contact Icon"
                                                src={`${process.env.PUBLIC_URL}/images/phone.svg`}
                                            /> <span className="contact">+233555180048319</span>
                                        </div>
                                        <div className="margin-bottom-small">
                                            <span className="landmark">Le Pierre Deux Complex,Plot No. 76A, 14 Senchi Close,Airport Residential Area</span>
                                            <div>
                                                <p className="font-size-small font-weight-bold uppercase margin-vertical-medium">Office
                                                    Hours</p>
                                                <p className="font-size-medium margin-vertical-small">Monday-Friday: 7
                                                    AM-4 PM </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item={true} xs={12} md={4}>
                                <Card elevation={1} raised={true} variant="elevation">
                                    <CardMedia
                                        className={classes.image}
                                        component="img"
                                        src={`${process.env.PUBLIC_URL}/images/office-branch.jpg`}/>
                                    <CardContent>
                                        <div className="margin-bottom-small">
                                            <img
                                                width="15"
                                                height="15"
                                                className="icon"
                                                alt="Contact Icon"
                                                src={`${process.env.PUBLIC_URL}/images/pin.svg`}
                                            /> <span className="location">Yendi </span> <span
                                            className="separator"> | </span> <span
                                            className="branch"> Operations Office</span>
                                        </div>
                                        <div className="margin-bottom-small">
                                            <img
                                                width="15"
                                                height="15"
                                                className="icon"
                                                alt="Contact Icon"
                                                src={`${process.env.PUBLIC_URL}/images/phone.svg`}
                                            /> <span className="contact">+233555180048319</span>
                                        </div>
                                        <div className="margin-bottom-small">
                                            <span className="landmark">Le Pierre Deux Complex,Plot No. 76A, 14 Senchi Close,Airport Residential Area</span>
                                            <div>
                                                <p className="font-size-small font-weight-bold uppercase margin-vertical-medium">Office
                                                    Hours</p>
                                                <p className="font-size-medium margin-vertical-small">Monday-Friday: 7
                                                    AM-4 PM </p>
                                            </div>
                                        </div>

                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item={true} xs={12} md={4}>
                                <Card elevation={1} raised={true} variant="elevation">
                                    <CardMedia
                                        className={classes.image}
                                        component="img"
                                        src={`${process.env.PUBLIC_URL}/images/image-3.jpg`}/>
                                    <CardContent>
                                        <div className="margin-bottom-small">
                                            <img
                                                width="15"
                                                height="15"
                                                className="icon"
                                                alt="Contact Icon"
                                                src={`${process.env.PUBLIC_URL}/images/pin.svg`}
                                            /> <span className="location">Yendi </span> <span
                                            className="separator"> | </span> <span
                                            className="branch"> Operations Office</span>
                                        </div>
                                        <div className="margin-bottom-small">
                                            <img
                                                width="15"
                                                height="15"
                                                className="icon"
                                                alt="Contact Icon"
                                                src={`${process.env.PUBLIC_URL}/images/phone.svg`}
                                            /> <span className="contact">+233555180048319</span>
                                        </div>
                                        <div className="margin-bottom-small">
                                            <span className="landmark">Le Pierre Deux Complex,Plot No. 76A, 14 Senchi Close,Airport Residential Area</span>
                                            <div>
                                                <p className="font-size-small font-weight-bold uppercase margin-vertical-medium">Office
                                                    Hours</p>
                                                <p className="font-size-medium margin-vertical-small">Monday-Friday: 7
                                                    AM-4 PM </p>
                                            </div>
                                        </div>

                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    </Container>
                </section>

                <section className="padding-vertical-huge">
                    <Container>
                        <Grid container={true} spacing={2} justify="center">
                            <Grid item={true} xs={12}>
                                <p className="sub-header uppercase">Send us a message</p>
                            </Grid>
                        </Grid>
                        <Grid container={true} spacing={5} justify="center">

                            <Grid item={true} xs={12} md={6}>
                                <div className={classes.mapContainer}>
                                    <ReactMapGL
                                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                                        mapStyle="mapbox://styles/mapbox/streets-v11"
                                        onViewportChange={viewPort => setViewPort(viewPort)}
                                        {...viewPort}>
                                        {
                                            offices.map((office, index) => {
                                                return (
                                                    <Marker key={index} latitude={office.coordinates[0]} longitude={office.coordinates[1]}>
                                                        <div onClick={(e) => {
                                                            e.preventDefault();
                                                            setSelectedOffice(office);
                                                        }}>
                                                            <img width="30" height="30" src={`${process.env.PUBLIC_URL}/images/location.svg`} alt="Location logo" />
                                                        </div>
                                                    </Marker>
                                                )
                                            })
                                        }

                                        {selectedOffice ? (
                                            <Popup
                                                onClose={() => {
                                                    setSelectedOffice(null);
                                                }}
                                                latitude={selectedOffice.coordinates[0]} longitude={selectedOffice.coordinates[1]}>
                                                <div>
                                                    <p className="text font-size-small font-weight-bold text-align-center">{selectedOffice.address}</p>
                                                    <p className="text font-size-small font-weight-bold text-align-center">{selectedOffice.phone}</p>
                                                </div>
                                            </Popup>
                                        ) : null}

                                    </ReactMapGL>
                                </div>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <ContactForm/>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </div>
        </Layout>
    )
}

export default ContactPage;
