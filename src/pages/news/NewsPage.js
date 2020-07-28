import React from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid} from "@material-ui/core";
import News from "../../components/shared/News";
import {connect} from "react-redux";

function NewsPage({news}) {

    return (
        <Layout>
            <div className="padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3} justify="center">
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">Latest news</p>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={3}>
                        {
                            (!news.length) ? (
                                <Grid container={true} item={true} xs={12} alignItems="center" justify="center">
                                    <Grid item={true}>
                                        <p className="uppercase font-weight-bold font-size-medium grey-text sub-header">No
                                            News Available</p>
                                    </Grid>
                                </Grid>
                            ) : (
                                news.map((newsItem, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <News newsItem={newsItem}/>
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
        news: state.news.news,
        loading: state.news.loading
    }
}
export default connect(mapStateToProps) (NewsPage);
