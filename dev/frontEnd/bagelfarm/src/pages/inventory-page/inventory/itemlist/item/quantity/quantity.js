import React from 'react';
import classes from './quantity.module.css'

const quantity = (props) => {
    return (
        <div className={classes.Toggle}>
            <h3>{props.qty}</h3>
        </div>
    )
}

export default quantity;