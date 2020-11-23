import classes from './orderdetails.module.css';
import React from 'react';
import {dateTime, money} from '../../../helpers'

const orderDetails = (props) => {
    console.log(props)

    var statusMap = {1: 'Order Placed', 2: 'In Progress', 3: 'Ready for Pickup', 4: 'Picked up', 5: 'Donated'}
    return(
        <div>
            {props.items.map((element, index) => {
                return(
                    <div key={index}>
                        <h3>{element.ingredients[0]}</h3>
                        {element.ingredients.length > 1 ?<h4>Add Ons:</h4> : null}
                        {element.ingredients.map((element, idx) => {
                            if (idx !== 0) {
                                return <p className={classes.AddOns} key={idx}><strong>{element}</strong></p>
                            }
                            return null
                        })}
                        <h4>{"Quantity: " + element.quantity}</h4>
                        <h4>{"Price: " + money.format(parseFloat(element.price) * element.quantity)}</h4>
                    </div>
                )
            })}
            <h3>Sub Total: {money.format(props.subTotal)}</h3>
            <h3>Discount: {money.format(props.discount)}</h3>
            <h3>Total Price: {money.format(props.price)}</h3>
            <h3>Status: {statusMap[props.status]}</h3>
            <h3>Ordered: {dateTime(props.orderTime)}</h3>
            <h3>Pickup Time: <strong>{dateTime(props.pickupTime)}</strong></h3>
            <h3>Points Redeemed: {props.redeemed}</h3>
            <h3>Points Gained: {props.rewards}</h3>
        </div>
    )
}

export default orderDetails;