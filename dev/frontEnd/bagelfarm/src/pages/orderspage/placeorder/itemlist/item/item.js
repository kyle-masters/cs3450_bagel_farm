import React from 'react';
import {money} from '../../../../../helpers'
import classes from './item.module.css';
import QuantityToggle from './quantitytoggle/quantitytoggle'

const item = (props) => {
    var itemBox = null;

    if (props.data) {
        itemBox = 
            <div className={classes.Item}>
                <h3 className={classes.Name}>{props.data.name} {props.data.category === "bagel" ? props.data.category : null}</h3>
                <h4>{money.format(props.data.price)}</h4>
                <QuantityToggle 
                    qty={props.data.qty}
                    toggleUp={props.toggleUp}
                    toggleDown={props.toggleDown}/>
            </div>
    }

    return itemBox;
}

export default item;