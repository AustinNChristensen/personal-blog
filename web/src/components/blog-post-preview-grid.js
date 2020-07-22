import { Link } from 'gatsby';
import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import BlogPostPreview from './blog-post-preview';
import styles from './blog-post-preview-grid.module.css';

function BlogPostPreviewGrid (props) {
    const columns = 2;
    const calcSize = (idx) => {
        if (idx === 0) {
            return columns;
        } else {
            return 1;
        }
    };

    return (
        <div className={styles.root}>
            {props.title && <h2 className={styles.headline}>{props.title}</h2>}
            <GridList
                cols={columns}
                className={styles.grid}
                cellHeight='auto'
                spacing={3}
            >
                {
                    props.nodes && props.nodes.map((node, idx) => (
                        <GridListTile
                            key={node.id}
                            cols={calcSize(idx)}
                            rows={calcSize(idx)}
                        >
                            <BlogPostPreview {...node} />
                        </GridListTile>
                    ))
                }
            </GridList>
            {props.browseMoreHref && (
                <div className={styles.browseMoreNav}>
                    <Link to={props.browseMoreHref}>Browse more</Link>
                </div>
            )}
        </div>
    );
}

BlogPostPreviewGrid.defaultProps = {
    title: '',
    nodes: [],
    browseMoreHref: ''
};

export default BlogPostPreviewGrid;