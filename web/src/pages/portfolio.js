import React from 'react';
import Layout from '../containers/layout';
import GraphQLErrorList from '../components/graphql-error-list';
import Container from '../components/container';

const PortfolioPage = (props) => {
    const { data, errors } = props;

    if (errors) {
        return (
            <Layout>
                <GraphQLErrorList errors={ errors }/>
            </Layout>
        );
    }
    return (
        <Layout>
            <Container>
                <h1>Portfolio</h1>
                <p>Coming Soon!</p>
            </Container>
        </Layout>
    );
};

export default PortfolioPage;