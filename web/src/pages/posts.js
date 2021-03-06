import React from 'react';
import { graphql } from 'gatsby';
import {
    mapEdgesToNodes,
    filterOutDocsPublishedInTheFuture,
    filterOutDocsWithoutSlugs
} from '../lib/helpers';
import BlogPostPreviewGrid from '../components/blog-post-preview-grid';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import { responsiveTitle1 } from '../components/typography.module.css';

export const query = graphql`
  query PostPageQuery {
    posts: allSanityPost(
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

const PostPage = (props) => {
    const { data, errors } = props;

    if (errors) {
        return (
            <Layout>
                <GraphQLErrorList errors={errors} />
            </Layout>
        );
    }

    const postNodes = data && data.posts && mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs).filter(filterOutDocsPublishedInTheFuture);

    return (
        <Layout>
            <SEO title='Posts' />
            <Container>
                <h1 className={responsiveTitle1}>Posts</h1>
                {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
            </Container>
        </Layout>
    );
};

export default PostPage;