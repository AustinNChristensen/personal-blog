import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { makeStyles, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { filterOutDocsPublishedInTheFuture, filterOutDocsWithoutSlugs, mapEdgesToNodes } from '../lib/helpers';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';

const useStyles = makeStyles(() => ({
    sectionCard: {
        display: 'flex',
        flexDirection: 'column',
        padding: '35px 30px',
        justifyContent: 'spaceAround',
        alignItems: 'center',
        height: '100%'
    },
    sectionImage: {
        margin: '10px 0'
    },
    sectionTitle: {
        margin: '10px 0'
    },
    sectionDescription: {
        margin: '10px 0'
    }
}));

const IndexPage = (props) => {
    // const classes = useStyles();
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
    const postNodes = (data || {}).posts ?
        mapEdgesToNodes(data.posts)
            .filter(filterOutDocsWithoutSlugs)
            .filter(filterOutDocsPublishedInTheFuture) :
        [];

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
            <Container>
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
                {/* <GridList*/}
                {/*    cols={ 3 }*/}
                {/* >*/}
                {/*    <GridListTile>*/}
                {/*        <Card*/}
                {/*            variant='elevation'*/}
                {/*            className={classes.sectionCard}*/}
                {/*        >*/}
                {/*        </Card>*/}
                {/*    </GridListTile>*/}
                {/*    <GridListTile>*/}
                {/*        <Card*/}
                {/*            variant='elevation'*/}
                {/*            className={classes.sectionCard}*/}
                {/*        >*/}
                {/*        </Card>*/}
                {/*    </GridListTile>*/}
                {/*    <GridListTile>*/}
                {/*        <Card*/}
                {/*            variant='elevation'*/}
                {/*            className={classes.sectionCard}*/}
                {/*        >*/}
                {/*        </Card>*/}
                {/*    </GridListTile>*/}
                {/* </GridList>*/}
                <p>This site is currently undergoing <strong>major</strong> renovations. Come back soon for more!</p>
                <p>Until then, check out some of my blog posts <Link to='/posts'>here</Link></p>
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