import { Link } from 'gatsby';
import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Archive as ArchiveIcon, Menu as MenuIcon } from '@material-ui/icons';
import { NavMenu } from './NavMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        color: 'white',
        textDecoration: 'none'
    }
}));

const Header = ({ onHideNav, onShowNav, showNav }) => {
    const classes = useStyles();

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                    edge='start'
                    className={classes.menuButton}
                    color='inherit'
                    aria-label='menu'
                    onClick={showNav ? onHideNav : onShowNav}
                >
                    <MenuIcon />
                </IconButton>
                <Link
                    to='/'
                    className={classes.title}
                >
                    <Typography
                        variant='h6'
                        className={classes.title}
                    >
                        Austin Christensen
                    </Typography>
                </Link>
            </Toolbar>
            <NavMenu
                isOpen={showNav}
                onClose={onHideNav}
                onOpen={onShowNav}
            />
        </AppBar>
    );
};

export default Header;