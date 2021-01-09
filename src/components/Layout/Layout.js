import React from 'react'
import styles from './layout.module.css'
import Auxillary from "../../hoc/Auxillary";

const layout = (props) => {
    return (
        <Auxillary>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={styles.Content}>
                {props.children}
            </main>
        </Auxillary>
    );

}

export default layout;
