import React from 'react';
import {money} from '../../../../../helpers'
import classes from './item.module.css';
import Quantity from './quantity/quantity'

const item = (props) => {
    var itemBox = null;

    if (props.data) {
        itemBox = 
            <div className={classes.Item}>
                <h3 className={classes.Name}>{props.data.name} {props.data.category}</h3>
                <h4>{money.format(props.data.price)}</h4>
                <Quantity 
                    qty={props.data.qty}/>
                <button className={classes.Button} onClick={props.restock}>Restock</button>
            </div>
    }

    return itemBox;
}

export default item;