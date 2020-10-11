import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from '../styles/theme';
import Header from './header';
import '../styles/layout.css';
import styles from './layout.module.css';

const Layout = ({ children, siteTitle }) => (
    <MuiThemeProvider theme={theme} >
        <Header
            siteTitle={siteTitle}
        />
        <div className={styles.content}>{children}</div>
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.siteInfo}>
                    &copy; {new Date().getFullYear()}, Austin Christensen
                </div>
            </div>
        </footer>
    </MuiThemeProvider>
);

export default Layout;