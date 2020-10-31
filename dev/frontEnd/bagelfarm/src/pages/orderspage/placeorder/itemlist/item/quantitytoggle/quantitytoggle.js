import React from 'react';
import classes from './quantitytoggle.module.css'

const quantityToggle = (props) => {
    return (
        <div className={classes.Toggle}>
            <button 
                className={classes.Button}
                onClick={props.toggleDown}><strong>-</strong></button>
            <h3>{props.qty}</h3>
            <button 
                className={classes.Button}
                onClick={props.toggleUp}><strong>+</strong></button>
        </div>
    )
}

export default quantityToggle;