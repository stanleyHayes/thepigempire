import React from "react";
import Layout from "../../components/layout/Layout";
import {Container} from "@material-ui/core";

const HomePage = () => {
    return (
        <Layout>
            <Container>
                <p className="text-align-center font-weight-bold font-size-huge">Home Page</p>
            </Container>
        </Layout>
    )
}

export default HomePage;
