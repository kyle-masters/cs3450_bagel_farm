import React from 'react';
import classes from './item.module.css';

const itemHeader = (props) => {
    return (
        <div className={[classes.Item, classes.Header].join(" ")}>
            <h2 className={classes.Name}>Name</h2>
            <h2>Price</h2>
            <h2>Qty</h2>
        </div>
    ) 
}

export default itemHeader;