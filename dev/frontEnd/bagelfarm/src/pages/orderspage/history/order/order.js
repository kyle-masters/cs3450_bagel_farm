import React from 'react';
import classes from './order.module.css';
import {date} from '../../../../helpers'
import OrderDetails from '../../orderdetails/orderdetails'
import Button from '../../../../components/UI/ButtonRelative/ButtonRelative'

const order = (props) => {
    return (
        <div className={classes.Order}>
            <div className={classes.Title}>
                <h2>{getItemList(props.data.items)}</h2>
                <h2>{date(props.data.orderTime)}</h2>
            </div>
            {props.showDetailsID ? <Button clicked={props.hideDetails}>Hide Details</Button> : <Button clicked={props.showDetails}>Show Details</Button>}
            {props.showDetailsID ? <OrderDetails {...props.data}/> : null}    
        </div>
    )
}

const getItemList = (items) => {
    var string = "";
    items.forEach(element => string += element.ingredients[0] + ", ")
    return string.slice(0, -2);
}

export default order;