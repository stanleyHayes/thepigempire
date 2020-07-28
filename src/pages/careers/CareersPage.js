import React from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid} from "@material-ui/core";
import {connect} from "react-redux";
import Career from "../../components/shared/Career";

function CareersPage({careers}) {

    return (
        <Layout>
            <div className="padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3} justify="center">
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">Careers</p>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={3}>
                        {
                            (!careers.length) ? (
                                <Grid container={true} item={true} xs={12} alignItems="center" justify="center">
                                    <Grid item={true}>
                                        <p className="uppercase font-weight-bold font-size-medium grey-text">
                                            No Career Available
                                        </p>
                                    </Grid>
                                </Grid>
                            ) : (
                                careers.map((career, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Career career={career}/>
                                        </Grid>
                                    )
                                })
                            )
                        }
                    </Grid>
                </Container>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        careers: state.careers.careers,
        loading: state.careers.loading
    }
}

export default connect(mapStateToProps) (CareersPage);
