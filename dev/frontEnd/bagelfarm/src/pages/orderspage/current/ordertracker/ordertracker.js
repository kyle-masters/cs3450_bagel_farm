import React from 'react';
import classes from './ordertracker.module.css';
import OrderDetails from '../../orderdetails/orderdetails'
import Button from '../../../../components/UI/ButtonRelative/ButtonRelative'

const orderTracker = (props) => {
    return (
        <div className={classes.Outside}>
            <h2>{getItemList(props.data.items)}</h2>
            <div>
                <div className={classes.Line}></div>
                <div className={classes.OrderTracker}>
                    <div className={(props.data.status >= 1) ? [classes.Dot, classes.DotFilled].join(" ") : classes.Dot}></div>
                    <div className={(props.data.status >= 2) ? [classes.Dot, classes.DotFilled].join(" ") : classes.Dot}></div>
                    <div className={(props.data.status >= 3) ? [classes.Dot, classes.DotFilled].join(" ") : classes.Dot}></div>
                </div>
                <div className={classes.LabelTracker}>
                    <div><p><strong>Order Placed</strong></p></div>
                    <div><p><strong>In Progress</strong></p></div>
                    <div><p><strong>Ready for Pickup</strong></p></div>
                </div>
            </div>
            <div className={classes.ButtonLayer}>
                {props.showDetailsID ? <Button clicked={props.hideDetails}>Hide Details</Button> : <Button clicked={props.showDetails}>Show Details</Button>}
                <Button clicked={props.cancelOrderButton} disabled={props.data.status > 1}>Cancel Order</Button>
            </div>
            <div className={classes.AddOns}>
                {props.showDetailsID ? <OrderDetails {...props.data}/> : null}   
            </div>
             
        </div>
    )
}

const getItemList = (items) => {
    var string = "";
    items.forEach(element => string += element.ingredients[0] + ", ")
    return string.slice(0, -2);
}

export default orderTracker;