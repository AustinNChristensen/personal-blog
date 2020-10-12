import { Link } from 'gatsby';
import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        color: 'white',
        textDecoration: 'none'
    },
    linkGroup: {
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'row'
    },
    headerLink: {
        color: 'white',
        textDecoration: 'none',
        width: 'auto',
        padding: '2px 10px',
        '&:not(:first-child)': {
            marginLeft: theme.spacing(2)
        }
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static'>
            <Toolbar>
                <Link
                    to='/'
                    className={classes.title}
                >
                    <Typography variant='h6'>
                        Austin Christensen
                    </Typography>
                </Link>
                <div className={classes.linkGroup}>
                    <Link
                        to='/'
                        className={classes.headerLink}
                    >
                        <Typography variant='h6'>
                            home
                        </Typography>
                    </Link>
                    <Link
                        to='/posts'
                        className={classes.headerLink}
                    >
                        <Typography variant='h6'>
                            posts
                        </Typography>
                    </Link>
                    <Link
                        to='/portfolio'
                        className={classes.headerLink}
                    >
                        <Typography variant='h6'>
                            portfolio
                        </Typography>
                    </Link>
                    <Link
                        to='/about'
                        className={classes.headerLink}
                    >
                        <Typography variant='h6'>
                            about
                        </Typography>
                    </Link>
                    <Link
                        to='/contact'
                        className={classes.headerLink}
                    >
                        <Typography variant='h6'>
                            contact
                        </Typography>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;