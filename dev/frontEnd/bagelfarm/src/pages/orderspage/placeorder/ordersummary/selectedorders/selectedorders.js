import React from 'react';
import {money} from '../../../../../helpers'
import classes from './selectedorders.module.css';

const selectedOrders = (props) => {
    var selected = null

    selected =
        <div className={classes.Selected}>
            <div className={classes.Orders}>
                <div className={classes.OrderSelections}>
                    <h2>Selected Items</h2>
                    <h2>Quantity</h2>
                </div>
                {props.items.length >= 1 ? props.items.map((el, idx) => {
                    return (
                        <div key={idx} className={classes.OrderSelections}>
                            <h3>{el.name + " " + el.category}</h3>
                            <h3>{el.qty}</h3>
                        </div>
                    )
                }): <h3>No Items Selected</h3>}
            </div>
            <div className={classes.Total}>
                <h2>Total: {money.format(props.totalAmount)}</h2>
            </div>
        </div>
    
    return selected;
}

export default selectedOrders;