import React, {Component} from 'react'
import styles from './layout.module.css'
import Auxillary from "../../hoc/Auxillary";
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({
                          showSideDrawer: false
                      })
    }

    render() {

        return (

            <Auxillary>
                <Toolbar/>
                <SideDrawer
                    open = {this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Auxillary>
        )
    }

}

export default Layout;
