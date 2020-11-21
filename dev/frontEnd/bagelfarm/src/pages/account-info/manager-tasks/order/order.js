import React from 'react'
import Button from '../../../../components/UI/ButtonRelative/ButtonRelative'
import classes from './order.module.css'
import OrderDetails from '../../../orderspage/orderdetails/orderdetails'


const order = (props) => {
    console.log(props)
    return (
        <div className={classes.Order}>
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
            <div className={classes.Buttons}>
                {props.showDetailsID ? <Button clicked={props.hideDetails}>Hide Details</Button> : <Button clicked={props.showDetails}>Show Details</Button>}
                {props.ready ? <Button clicked={props.donate}>Donate Order</Button> : null}
                <Button clicked={props.update}>{props.text}</Button>
            </div>
            {props.showDetailsID ? <OrderDetails {...props.data}/> : null}
            
        </div>
    )
}

const getItemList = (items) => {
    var string = "";
    items.forEach(element => string += element.ingredients + ", ")
    return string.slice(0, -2);
}

export default order;

