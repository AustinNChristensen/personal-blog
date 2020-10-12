import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import { responsiveTitle1, responsiveTitle2 } from '../components/typography.module.css';

const IndexPage = (props) => {
    const { data, errors } = props;
    const [isMessageOpen, setIsMessageOpen] = useState(true);

    const handleClose = () => {
        setIsMessageOpen(false);
    };

    if (errors) {
        return (
            <Layout>
                <GraphQLErrorList errors={ errors } />
            </Layout>
        );
    }

    const site = (data || {}).site;

    if (!site) {
        throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
        );
    }

    return (
        <Layout>
            <SEO
                title={ site.title }
                description={ site.description }
                keywords={ site.keywords }
            />
            <Container
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                }}
            >
                <Snackbar
                    open={ isMessageOpen }
                    autoHideDuration={ 5000 }
                    onClose={ handleClose }
                >
                    <Alert
                        onClose={ handleClose }
                        severity='warning'
                        elevation={ 6 }
                        variant='filled'
                    >
                        This site is currently undergoing major changes, updates coming soon!
                    </Alert>
                </Snackbar>
                <h1 className={responsiveTitle1}>Hello, I'm Austin Christensen.</h1>
                <p className={responsiveTitle2}>I build awesome software in Chicago, IL.</p>
            </Container>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      subtitle
      description
      keywords
    }
    posts: allSanityPost(
      limit: 10
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;