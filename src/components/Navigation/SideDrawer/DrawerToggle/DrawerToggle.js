import React from 'react';
import classes from './drawerToggle.module.css'

const drawerToggle = (props) => {
    return (
        <div
            style={{color: 'white'}}
            onClick={props.clicked}
            className={classes.DrawerToggle}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default drawerToggle;
