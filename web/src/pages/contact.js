import React from 'react';
import Layout from '../containers/layout';
import Container from '../components/container';

const ContactPage = (props) => {
    const { data, errors } = props;

    if (errors) {
        return (
            <Layout>
                <GraphQLErrorList errors={errors} />
            </Layout>
        );
    }

    return (
          <Layout>
              <Container>
                  <h1>Contact</h1>
                   <p>Coming Soon!</p>
              </Container>
          </Layout>
         );
};

export default ContactPage;