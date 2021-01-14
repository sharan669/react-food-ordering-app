import React, {Component} from 'react'

import classes from './modal.module.css'
import Auxillary from "../../../hoc/Auxillary/Auxillary";
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.show !== this.props.show) {
            return true;
        }
        return false
    }

    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render() {
        return (<Auxillary>
            <Backdrop show={this.props.show}
                      clicked={this.props.modalClosed}/>
            <div
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : "translateY(-100vh)",
                    opactity: this.props.show ? '1' : '0'
                }}
            >
                {this.props.children}
            </div>
        </Auxillary>)
    }
}

export default Modal;
