import React from 'react'
import styles from './layout.module.css'
import Auxillary from "../../hoc/Auxillary";
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => {
    return (
        <Auxillary>
            <Toolbar/>
            <main className={styles.Content}>
                {props.children}
            </main>
        </Auxillary>
    );

}

export default layout;
