import React from "react";
import {Container, Grid, Card, CardContent} from "@material-ui/core";
import Layout from "../../components/layout/Layout";
import "../../App.css";
import {makeStyles} from "@material-ui/styles";

function AboutPage() {

    const useStyles = makeStyles(theme => {
        return {
            container: {},
            card: {
                minHeight: 300
            },
            missionCard: {
                minHeight: 270
            }
        }
    })

    const classes = useStyles();

    return (
        <Layout>
            <div className={classes.container}>
                <section>
                    <div className="responsive-height">
                        <img alt="About Hero" src={`${process.env.PUBLIC_URL}/images/hero-image-big.jpg`}
                             className="responsive-image"/>
                    </div>
                </section>

                <section className="section light-background padding-vertical-big">
                    <Container>
                        <Grid container={true} spacing={3}>
                            <Grid item={true} xs={12}>
                                <p className="uppercase margin-vertical-large sub-header">profile</p>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <p className="profile text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                                <p className="profile text">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                                    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                    suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                                    iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                </p>
                            </Grid>
                        </Grid>
                    </Container>
                </section>

                <section className="section padding-vertical-big">
                    <Container>
                        <Grid container={true} spacing={3} justify="space-around">
                            <Grid item={true} xs={12}>
                                <p className="uppercase margin-vertical-large sub-header">Mission & Vision</p>
                            </Grid>
                            <Grid item={true} xs={12} md={5}>
                                <Card className={classes.missionCard} raised={true} elevation={1}
                                      variant="elevation">
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
                                            <p className="title center-align uppercase grey-text font-weight-bold">mission</p>
                                            <p className="summary center-align">
                                                To be a leading global integrated Iron and Steel development
                                                corporation, whose
                                                operations have a profound impact on the quality of life of the
                                                people
                                                of
                                                Ghana.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item={true} xs={12} md={5}>
                                <Card className={classes.missionCard} raised={true} elevation={1}
                                      variant="elevation">
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
                                            <p className="title center-align uppercase grey-text font-weight-bold">vision</p>
                                            <p className="summary center-align">
                                                To be a leading global integrated Iron and Steel development
                                                corporation, whose
                                                operations have a profound impact on the quality of life of the
                                                people
                                                of
                                                Ghana.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
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
                                                <p className="text-align-center text font-weight-500">Lorem ipsum dolor
                                                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua.</p>
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
                                                <p className="text-align-center text font-weight-500">Lorem ipsum dolor
                                                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua.</p>
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
                                                <p className="text-align-center text font-weight-500">Lorem ipsum dolor
                                                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua.</p>
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
                                                <p className="text-align-center text font-weight-500">Lorem ipsum dolor
                                                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>

                <section className="section padding-vertical-huge">
                    <Container>
                        <Grid container={true} spacing={3}>
                            <Grid item={true} xs={12}>
                                <p className="uppercase margin-vertical-large sub-header">core values</p>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Card className={classes.card} raised={true} elevation={1} variant="elevation">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/idea.svg`}
                                                    alt="Creativity logo"/>
                                            </div>
                                            <p className="title center-align font-weight-bold uppercase grey-text">Creativity
                                                and
                                                Innovation</p>
                                            <p className="summary center-align">We are creative in delivering value
                                                to
                                                our
                                                clients, shareholders, manufacturers and the community. We
                                                anticipate
                                                change
                                                and
                                                capitalize on the many opportunities that arise.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Card className={classes.card} raised={true} elevation={1} variant="elevation">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/integrity.svg`}
                                                    alt="Integrity logo"/>
                                            </div>
                                            <p className="title center-align font-weight-bold uppercase grey-text">Integrity</p>
                                            <p className="summary center-align">
                                                In the discharge of our mandate, we will be fair, honest,
                                                transparent
                                                and
                                                ethical
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Card className={classes.card} raised={true} elevation={1} variant="elevation">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/healthcare.svg`}
                                                    alt="Healthcare logo"/>
                                            </div>
                                            <p className="title center-align font-weight-bold uppercase grey-text">Life,
                                                Health and
                                                Environment</p>
                                            <p className="summary center-align">We seek to improve our wellbeing,
                                                our
                                                working
                                                conditions and the surroundings in which we live in. </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Card className={classes.card} raised={true} elevation={1} variant="elevation">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/teamwork.svg`}
                                                    alt="Teamwork logo"/>
                                            </div>
                                            <p className="title center-align font-weight-bold uppercase grey-text">Teamwork</p>
                                            <p className="summary center-align">
                                                Our team is supportive of each other’s efforts, loyal to one
                                                another,
                                                and
                                                care
                                                for each other both personally and professionally.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
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
            </div>
        </Layout>
    )
}

export default AboutPage;
