import React from 'react';
import { Divider, List, ListItem, ListItemText, makeStyles, SwipeableDrawer, ListItemIcon } from '@material-ui/core';
import {
    Home as HomeIcon,
    Book as BookIcon,
    Info as InfoIcon,
    ContactMail as ContactIcon,
    Work as WorkIcon,
    Close as CloseIcon
} from '@material-ui/icons';

const useStyles = makeStyles({
    list: {
        width: 250
    }
});

export const NavMenu = ({ isOpen, onClose, onOpen }) => {
    const classes = useStyles();

    const toggleDrawer = () => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        if (isOpen) {
            onClose();
        } else {
            onOpen();
        }
    };

    const list = () => (
        <div
            className={classes.list}
            role='presentation'
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
        >
            <List>
                <ListItem
                    button
                    component='a'
                    href='/'
                >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>
                <ListItem
                    button
                    component='a'
                    href='/posts'
                >
                    <ListItemIcon>
                        <BookIcon />
                    </ListItemIcon>
                    <ListItemText primary='Posts' />
                </ListItem>
                <ListItem
                    button
                    component='a'
                    href='portfolio'
                >
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary='Portfolio' />
                </ListItem>
                <ListItem
                    button
                    component='a'
                    href='about'
                >
                    <ListItemIcon>
                        <ContactIcon />
                    </ListItemIcon>
                    <ListItemText primary='About Me' />
                </ListItem>
                <ListItem
                    button
                    component='a'
                    href='contact'
                >
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary='Contact' />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem
                    button
                >
                    <ListItemIcon>
                        <CloseIcon />
                    </ListItemIcon>
                    <ListItemText
                        onClick={toggleDrawer}
                        primary='Close Menu'
                    />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <SwipeableDrawer
                anchor='left'
                open={isOpen}
                onClose={toggleDrawer()}
                onOpen={toggleDrawer()}
            >
                {list('left')}
            </SwipeableDrawer>
        </div>
    );
};