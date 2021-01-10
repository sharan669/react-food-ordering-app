import React from 'react'
import styles from './layout.module.css'
import Auxillary from "../../hoc/Auxillary";
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => {
    return (
        <Auxillary>
            <Toolbar/>
            <SideDrawer/>
            <main className={styles.Content}>
                {props.children}
            </main>
        </Auxillary>
    );

}

export default layout;
