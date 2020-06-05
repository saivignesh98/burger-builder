import React from 'react';
import styles from '../../css/Layout.module.css';

const Layout = (props) => (
    <React.Fragment>
        <div>Toolbar, SideDrawer, and Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </React.Fragment>
)

export default Layout;