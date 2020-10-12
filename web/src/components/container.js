import React from 'react';
import styles from './container.module.css';

const Container = ({ children, ...rest }) => {
    return (
        <div
            className={styles.root}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Container;